import React, { useState, useEffect } from 'react';

interface TerminalManifestoProps {
  autoStart?: boolean;
}

export const TerminalManifesto: React.FC<TerminalManifestoProps> = () => {
  const promptText = "root@anti-code:~# ./manifesto.sh";
  
  const manifestoLines = [
    ">> Governments seek control. Corporations seek influence. Trust neither blindly.",
    ">>",
    ">> We rely on layers of abstractions we don't understand.",
    ">> It's time to build from the ground up.",
    ">>",
    ">> Welcome to the Digital World of Koundinya Gajulapalli.",
    ">> Status: ONLINE"
  ];

  const [promptTyped, setPromptTyped] = useState("");
  const [activeLineIndex, setActiveLineIndex] = useState(-1);
  const [currentLineTyped, setCurrentLineTyped] = useState("");
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [showCrt, setShowCrt] = useState(true);

  // Skip animation to display everything instantly
  const handleSkip = () => {
    setPromptTyped(promptText);
    setCompletedLines(manifestoLines);
    setActiveLineIndex(manifestoLines.length);
    setCurrentLineTyped("");
    setIsFinished(true);
  };

  const handleRestart = () => {
    setPromptTyped("");
    setActiveLineIndex(-1);
    setCurrentLineTyped("");
    setCompletedLines([]);
    setIsFinished(false);
  };

  // Phase 1: Type the prompt
  useEffect(() => {
    if (promptTyped.length < promptText.length) {
      const timeout = setTimeout(() => {
        setPromptTyped(promptText.slice(0, promptTyped.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    } else if (activeLineIndex === -1) {
      const timeout = setTimeout(() => {
        setActiveLineIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [promptTyped, activeLineIndex]);

  // Phase 2: Type each manifesto line
  useEffect(() => {
    if (activeLineIndex >= 0 && activeLineIndex < manifestoLines.length) {
      const targetLine = manifestoLines[activeLineIndex];
      
      // If blank or empty separator line
      if (targetLine === ">>" || targetLine === "") {
        const timeout = setTimeout(() => {
          setCompletedLines(prev => [...prev, targetLine]);
          setActiveLineIndex(prev => prev + 1);
          setCurrentLineTyped("");
        }, 120);
        return () => clearTimeout(timeout);
      }

      if (currentLineTyped.length < targetLine.length) {
        const timeout = setTimeout(() => {
          setCurrentLineTyped(targetLine.slice(0, currentLineTyped.length + 1));
        }, 22);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCompletedLines(prev => [...prev, targetLine]);
          setActiveLineIndex(prev => prev + 1);
          setCurrentLineTyped("");
        }, 180);
        return () => clearTimeout(timeout);
      }
    } else if (activeLineIndex === manifestoLines.length && !isFinished) {
      setIsFinished(true);
    }
  }, [activeLineIndex, currentLineTyped, isFinished]);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-6 rounded-lg overflow-hidden border border-emerald-900/60 bg-[#04080c] shadow-2xl font-mono text-sm leading-relaxed">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#091118] border-b border-emerald-900/40 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={handleRestart} title="Replay" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setShowCrt(!showCrt)} title="Toggle CRT" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={handleSkip} title="Instant Display" />
          <span className="text-xs text-emerald-400/70 font-mono ml-2 tracking-wider">anti-code@arch-box: ~/manifesto.sh</span>
        </div>
        <div className="flex items-center space-x-3 text-xs text-gray-500">
          <button 
            onClick={() => setShowCrt(!showCrt)}
            className="text-[10px] px-2 py-0.5 rounded border border-gray-700/60 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
          >
            CRT: {showCrt ? "ON" : "OFF"}
          </button>
          {!isFinished ? (
            <button 
              onClick={handleSkip} 
              className="text-[10px] text-emerald-400 hover:underline cursor-pointer"
            >
              [SKIP ANIMATION]
            </button>
          ) : (
            <button 
              onClick={handleRestart} 
              className="text-[10px] text-gray-400 hover:text-emerald-300 hover:underline cursor-pointer"
            >
              [REPLAY]
            </button>
          )}
        </div>
      </div>

      {/* Terminal Window Content */}
      <div className={`relative p-5 sm:p-7 min-h-[310px] text-emerald-400 bg-[#030609] ${showCrt ? 'crt-overlay' : ''}`}>
        {/* Decorative Grid */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-1.5">
          {/* Prompt line */}
          <div className="flex items-center text-emerald-300 font-semibold tracking-wide">
            <span className="text-emerald-500 mr-2">&gt;</span>
            <span>{promptTyped}</span>
            {promptTyped.length < promptText.length && (
              <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
            )}
          </div>

          <div className="text-emerald-600/70 text-xs py-1">&gt;</div>

          {/* Render Completed Manifesto Lines */}
          {completedLines.map((line, idx) => {
            const isStatusLine = line.includes("Status: ONLINE");
            const isWelcomeLine = line.includes("Welcome to the Digital World");
            const isControlLine = line.includes("Governments seek control");

            return (
              <div 
                key={idx} 
                className={`transition-opacity duration-150 ${
                  isStatusLine 
                    ? 'text-cyan-300 font-bold tracking-wide' 
                    : isWelcomeLine 
                    ? 'text-emerald-200 font-bold' 
                    : isControlLine 
                    ? 'text-emerald-300 font-medium' 
                    : 'text-emerald-400/90'
                }`}
              >
                {line}
              </div>
            );
          })}

          {/* Render Currently Typing Line */}
          {activeLineIndex >= 0 && activeLineIndex < manifestoLines.length && (
            <div className="text-emerald-300 font-medium flex items-center">
              <span>{currentLineTyped}</span>
              <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
            </div>
          )}

          {/* Finished Idle Cursor */}
          {isFinished && (
            <div className="pt-2 flex items-center text-xs text-emerald-500/80">
              <span className="text-emerald-400 mr-2">root@anti-code:~#</span>
              <span className="inline-block w-2.5 h-4 bg-emerald-400 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
