import React, { useState, useRef } from 'react';

interface ShrutiNote {
  name: string;
  indianName: string;
  ratio: number;
  ratioStr: string;
  cents: number;
}

export const AudioSynthesizer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [droneActive, setDroneActive] = useState(false);
  const [baseFreq, setBaseFreq] = useState(261.63); // Middle C (Sa)
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeOscRef = useRef<OscillatorNode | null>(null);
  const activeGainRef = useRef<GainNode | null>(null);
  const droneOscRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);

  const shrutis: ShrutiNote[] = [
    { name: 'S', indianName: 'Shadja (Sa)', ratio: 1.0, ratioStr: '1/1', cents: 0 },
    { name: 'r1', indianName: 'Komal Re (Ati-Komal)', ratio: 256 / 243, ratioStr: '256/243', cents: 90 },
    { name: 'r2', indianName: 'Komal Re (Komal)', ratio: 16 / 15, ratioStr: '16/15', cents: 112 },
    { name: 'R1', indianName: 'Shuddha Re (Trishruti)', ratio: 10 / 9, ratioStr: '10/9', cents: 182 },
    { name: 'R2', indianName: 'Shuddha Re (Chatushruti)', ratio: 9 / 8, ratioStr: '9/8', cents: 204 },
    { name: 'g1', indianName: 'Komal Ga (Sadharana)', ratio: 32 / 27, ratioStr: '32/27', cents: 294 },
    { name: 'g2', indianName: 'Komal Ga (Antara Komal)', ratio: 6 / 5, ratioStr: '6/5', cents: 316 },
    { name: 'G1', indianName: 'Shuddha Ga (Antara)', ratio: 5 / 4, ratioStr: '5/4', cents: 386 },
    { name: 'G2', indianName: 'Shuddha Ga (Chyuta)', ratio: 81 / 64, ratioStr: '81/64', cents: 408 },
    { name: 'M1', indianName: 'Shuddha Ma', ratio: 4 / 3, ratioStr: '4/3', cents: 498 },
    { name: 'M2', indianName: 'Tivra Ma (Prati)', ratio: 45 / 32, ratioStr: '45/32', cents: 590 },
    { name: 'P', indianName: 'Pancham (Pa)', ratio: 3 / 2, ratioStr: '3/2', cents: 702 },
    { name: 'd1', indianName: 'Komal Dha', ratio: 128 / 81, ratioStr: '128/81', cents: 792 },
    { name: 'd2', indianName: 'Komal Dha (Just)', ratio: 8 / 5, ratioStr: '8/5', cents: 814 },
    { name: 'D1', indianName: 'Shuddha Dha (Minor)', ratio: 5 / 3, ratioStr: '5/3', cents: 884 },
    { name: 'D2', indianName: 'Shuddha Dha (Major)', ratio: 27 / 16, ratioStr: '27/16', cents: 906 },
    { name: 'n1', indianName: 'Komal Ni (Kaisiki)', ratio: 16 / 9, ratioStr: '16/9', cents: 996 },
    { name: 'n2', indianName: 'Komal Ni (Just)', ratio: 9 / 5, ratioStr: '9/5', cents: 1018 },
    { name: 'N1', indianName: 'Shuddha Ni (Kakali)', ratio: 15 / 8, ratioStr: '15/8', cents: 1088 },
    { name: 'S\'', indianName: 'Tara Shadja (High Sa)', ratio: 2.0, ratioStr: '2/1', cents: 1200 },
  ];

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playNote = (note: ShrutiNote) => {
    const ctx = getAudioContext();
    setActiveNote(note.name);
    setIsPlaying(true);

    const freq = baseFreq * note.ratio;

    if (activeOscRef.current && activeGainRef.current) {
      // Smooth frequency glide (meend effect)
      activeOscRef.current.frequency.cancelScheduledValues(ctx.currentTime);
      activeOscRef.current.frequency.exponentialRampToValueAtTime(freq, ctx.currentTime + 0.08);
      return;
    }

    // New note attack
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Harmonics rich saw/triangle wave matching acoustic steel strings of Sarod
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Filter to warm up the sound
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.04);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    activeOscRef.current = osc;
    activeGainRef.current = gain;
  };

  const stopNote = () => {
    if (activeGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      activeGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      activeGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
      setTimeout(() => {
        if (activeOscRef.current) {
          try {
            activeOscRef.current.stop();
            activeOscRef.current.disconnect();
          } catch (e) {
            // Already stopped
          }
          activeOscRef.current = null;
          activeGainRef.current = null;
        }
        setIsPlaying(false);
        setActiveNote(null);
      }, 220);
    }
  };

  const toggleDrone = () => {
    const ctx = getAudioContext();
    if (droneActive) {
      if (droneGainRef.current) {
        droneGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
        setTimeout(() => {
          droneOscRef.current?.stop();
          droneOscRef.current = null;
          droneGainRef.current = null;
        }, 350);
      }
      setDroneActive(false);
    } else {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(baseFreq / 2, ctx.currentTime); // Lower octave drone (Kharja Sa)

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      droneOscRef.current = osc;
      droneGainRef.current = gain;
      setDroneActive(true);
    }
  };

  return (
    <div className="w-full rounded-lg border border-[#1d2a3e] bg-[#070c14] p-5 sm:p-7 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#162334] gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">
              22-SHRUTI MICROTONAL HARMONIC SYNTHESIZER
            </h3>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Pure mathematical pitch ratios ($3:2$ fifths, $5:4$ thirds) of Indian Classical music & Sarod meend.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleDrone}
            className={`px-3 py-1.5 rounded text-xs font-semibold border transition-all cursor-pointer ${
              droneActive 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-lg' 
                : 'bg-[#0f1724] text-gray-400 border-[#1d2a3e] hover:text-white'
            }`}
          >
            TANPURA DRONE: {droneActive ? 'ACTIVE' : 'MUTED'}
          </button>
        </div>
      </div>

      {/* Note matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5 pt-6">
        {shrutis.map((note) => {
          const isActive = activeNote === note.name;
          return (
            <button
              key={note.name}
              onMouseDown={() => playNote(note)}
              onMouseUp={stopNote}
              onMouseLeave={stopNote}
              onTouchStart={() => playNote(note)}
              onTouchEnd={stopNote}
              className={`p-3 rounded border text-left transition-all select-none cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-amber-500/20 border-amber-400 text-white scale-[1.02] shadow-lg'
                  : 'bg-[#0c1422] border-[#1d2a3e] text-gray-300 hover:border-emerald-500/40 hover:bg-[#101b2e]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-400">{note.name}</span>
                <span className="text-[10px] text-gray-500 font-mono">{note.cents}¢</span>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-200 block truncate">{note.indianName}</span>
                <span className="text-[10px] text-cyan-400/80 font-mono">{note.ratioStr} ({(baseFreq * note.ratio).toFixed(1)} Hz)</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-[#141e2e] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-2">
        <span>Click or hold any Shruti button to sound the exact mathematical frequency.</span>
        <span className="text-emerald-400">Tonic: Sa = {baseFreq} Hz (Middle C)</span>
      </div>
    </div>
  );
};
