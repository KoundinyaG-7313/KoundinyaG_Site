import React, { useState } from 'react';
import { worldBiomes, type Biome } from '../data/worldBiomes';

export const WorldCanvas: React.FC = () => {
  const [activeBiome, setActiveBiome] = useState<Biome>(worldBiomes[0]);
  const [hoveredBiome, setHoveredBiome] = useState<Biome | null>(null);

  return (
    <div className="relative w-full rounded-lg overflow-hidden border border-[#1d2a3e] bg-[#04070c] p-4 sm:p-6 font-mono">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#141e2e] gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-white font-bold text-sm tracking-wide uppercase">
              TOPOLOGICAL BIOME RADAR // SECTOR ZERO
            </h3>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Interactive coordinates mapping theoretical, systems, acoustic, and abyss territories.
          </p>
        </div>
        <div className="text-xs text-emerald-400 bg-[#0a121d] px-3 py-1.5 rounded border border-[#1d2a3e] flex items-center space-x-2">
          <span>ACTIVE NODE:</span>
          <span className="font-bold text-white">{hoveredBiome ? hoveredBiome.name : activeBiome.name}</span>
        </div>
      </div>

      {/* Main Map Viewport & Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
        {/* Radar Map (2 cols on desktop) */}
        <div className="lg:col-span-2 relative aspect-[16/10] bg-[#020407] rounded-md border border-[#162334] overflow-hidden group select-none">
          {/* Radar background grid & circles */}
          <div className="absolute inset-0 tech-grid-bg opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[30%] aspect-square rounded-full border border-emerald-900/30" />
            <div className="w-[60%] aspect-square rounded-full border border-emerald-900/25 absolute" />
            <div className="w-[90%] aspect-square rounded-full border border-emerald-900/20 absolute" />
            <div className="w-full h-px bg-emerald-900/30 absolute" />
            <div className="h-full w-px bg-emerald-900/30 absolute" />
          </div>

          {/* Compass labels */}
          <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-600 font-bold">N // HIGH ALTITUDE</span>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-600 font-bold">S // THE ABYSS</span>
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-600 font-bold">W // ACOUSTICS</span>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-600 font-bold">E // THEORETICAL</span>

          {/* Biome Markers */}
          {worldBiomes.map((biome) => {
            const isSelected = activeBiome.id === biome.id;
            const isHovered = hoveredBiome?.id === biome.id;

            return (
              <div
                key={biome.id}
                style={{
                  left: `${biome.radarPos.x}%`,
                  top: `${biome.radarPos.y}%`,
                }}
                onClick={() => setActiveBiome(biome)}
                onMouseEnter={() => setHoveredBiome(biome)}
                onMouseLeave={() => setHoveredBiome(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/marker"
              >
                {/* Ping wave */}
                <div 
                  className={`w-6 h-6 rounded-full absolute -top-1.5 -left-1.5 animate-ping opacity-30`}
                  style={{ backgroundColor: biome.accentHex }}
                />

                {/* Core node */}
                <div 
                  className={`w-4 h-4 rounded-sm border transition-all duration-200 flex items-center justify-center ${
                    isSelected || isHovered
                      ? 'scale-125 shadow-lg' 
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: isSelected || isHovered ? biome.accentHex : '#0c1522',
                    borderColor: biome.accentHex,
                    boxShadow: isSelected || isHovered ? `0 0 12px ${biome.accentHex}` : 'none'
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                {/* Label tooltip */}
                <div className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded text-[10px] border pointer-events-none transition-all duration-200 ${
                  isSelected || isHovered
                    ? 'opacity-100 translate-y-0 bg-[#09111b] text-white border-gray-600'
                    : 'opacity-0 translate-y-1 bg-[#09111b]/80 text-gray-400 border-[#1d2a3e]'
                }`}>
                  {biome.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Biome Telemetry & Navigation */}
        <div className="flex flex-col justify-between p-5 bg-[#080d16] rounded-md border border-[#162334]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#141e2e] pb-3">
              <span className="text-[11px] text-gray-500 uppercase">Sector Telemetry</span>
              <span 
                className="text-[10px] font-bold px-2 py-0.5 rounded border"
                style={{ 
                  color: activeBiome.accentHex, 
                  borderColor: `${activeBiome.accentHex}40`,
                  backgroundColor: `${activeBiome.accentHex}15`
                }}
              >
                {activeBiome.elevation}
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white tracking-wide" style={{ color: activeBiome.accentHex }}>
                {activeBiome.name}
              </h4>
              <p className="text-xs text-gray-400 font-mono mt-1">
                {activeBiome.coordinates}
              </p>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {activeBiome.lore}
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Key Facilities & Systems</span>
              {activeBiome.features.map((feature, i) => (
                <div key={i} className="flex items-center text-xs text-gray-300 space-x-2">
                  <span className="text-emerald-400">▹</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <a
              href={activeBiome.targetRoute}
              className="w-full py-2.5 px-4 rounded text-xs font-bold text-center block transition-all shadow-md"
              style={{
                backgroundColor: activeBiome.accentHex,
                color: '#020407',
                boxShadow: `0 0 15px ${activeBiome.accentHex}40`
              }}
            >
              TRANSMIT TO {activeBiome.name.toUpperCase()} &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
