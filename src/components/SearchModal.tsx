import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { researchProjects } from '../data/research';
import { worldBiomes } from '../data/worldBiomes';

interface SearchItem {
  title: string;
  category: string;
  url: string;
  description: string;
}

export const SearchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Compile searchable index
  const allItems: SearchItem[] = [
    // Standard Pages
    { title: 'Home', category: 'Core Node', url: '/', description: 'Terminal manifesto, digital world overview, active systems status' },
    { title: 'World Map', category: 'Exploration', url: '/world', description: 'Interactive biome map across research lab, celestial observatory, and abyss' },
    { title: 'About Max', category: 'Core Node', url: '/about', description: 'Theoretical physicist, systems programmer, sarod musician, endurance cyclist' },
    { title: 'Research Directory', category: 'Science', url: '/research', description: 'Relational time in 5D bulks, cosmology, quantum gravity, Wheeler-DeWitt' },
    { title: 'Publications & Works', category: 'Science', url: '/publications', description: 'Academic preprints, theoretical monographs, and ORCID publications' },
    { title: 'Projects Catalog', category: 'Systems', url: '/projects', description: 'Omni-Dashboard, AlgorithmicMusicApp, labcoat 3D physics, CAD' },
    { title: 'GitHub Dashboard', category: 'Telemetry', url: '/github', description: 'Synchronized commit history, repositories, and language distributions' },
    { title: 'Blog & Articles', category: 'Writing', url: '/blog', description: 'Deep technical writing on cosmology, Machian time, and software architecture' },
    { title: 'Celestial Observatory', category: 'Exploration', url: '/astronomy', description: 'Telescope optics, observation logs (M42, M31), astrophotography' },
    { title: 'Music & Acoustics', category: 'Arts', url: '/music', description: 'Indian classical Sarod, 22-Shruti microtonality, Western piano, algorithmic audio' },
    { title: 'Chronological Timeline', category: 'History', url: '/timeline', description: 'Milestones across physics research, kernel code, and cycling centuries' },
    { title: 'Achievements & Milestones', category: 'Record', url: '/achievements', description: 'Authentic accomplishments without empty corporate titles' },
    { title: 'Uses & Hardware Setup', category: 'Systems', url: '/uses', description: 'Arch Linux, Hyprland, Kitty Arasaka theme, Neovim, cycling gear' },
    { title: 'Now Page', category: 'Status', url: '/now', description: 'Active reading list, ongoing research derivations, current training block' },
    { title: 'Guestbook Terminal', category: 'Interactive', url: '/guestbook', description: 'Visitor signal transmitter and guest ledger' },
    { title: 'Privacy Manifesto', category: 'Philosophy', url: '/privacy', description: 'Zero telemetry, zero third-party trackers, local-first computing' },
    { title: 'Curated Links & Webring', category: 'Directory', url: '/links', description: 'Physics foundations, systems resources, essential readings' },
    { title: 'Secure Contact Node', category: 'Contact', url: '/contact', description: 'ProtonMail, GPG key fingerprint, verified communication channels' },

    // Research projects
    ...researchProjects.map(r => ({
      title: r.title,
      category: 'Research Paper',
      url: `/research/${r.slug}`,
      description: r.abstract.slice(0, 110) + '...'
    })),

    // Software projects
    ...projects.map(p => ({
      title: p.name,
      category: 'Project',
      url: `/projects/${p.slug}`,
      description: p.description.slice(0, 110) + '...'
    })),

    // World biomes
    ...worldBiomes.map(b => ({
      title: b.name,
      category: 'World Biome',
      url: b.targetRoute,
      description: b.lore.slice(0, 110) + '...'
    }))
  ];

  // Filter items
  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 7)
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-search', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-search', handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleItemClick = (url: string) => {
    setIsOpen(false);
    window.location.href = url;
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleItemClick(filteredItems[selectedIndex].url);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fade-in font-mono">
      <div 
        className="w-full max-w-2xl bg-[#090d15] border border-emerald-500/40 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[#1d2a3e] bg-[#0c121d]">
          <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a command, paper title, project, or coordinate..."
            className="w-full bg-transparent text-sm text-gray-100 placeholder-gray-500 focus:outline-none"
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="text-xs px-2 py-0.5 rounded bg-[#162132] text-gray-400 hover:text-white border border-[#23354f]"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              No matching nodes found for <span className="text-emerald-400 font-semibold">"{query}"</span>
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.url + idx}
                onClick={() => handleItemClick(item.url)}
                className={`p-3 rounded cursor-pointer transition-all flex flex-col space-y-1 ${
                  selectedIndex === idx 
                    ? 'bg-emerald-950/40 border border-emerald-500/50 text-white' 
                    : 'hover:bg-[#121a28] text-gray-300 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${selectedIndex === idx ? 'text-emerald-300' : 'text-gray-200'}`}>
                    {item.title}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#172233] text-emerald-400 border border-emerald-900/50">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-1">
                  {item.description}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#06090e] border-t border-[#1d2a3e] text-[11px] text-gray-500 flex justify-between select-none">
          <span>Navigate with <kbd className="text-gray-300 bg-[#162132] px-1 rounded">↑</kbd> <kbd className="text-gray-300 bg-[#162132] px-1 rounded">↓</kbd></span>
          <span>Select with <kbd className="text-gray-300 bg-[#162132] px-1 rounded">Enter</kbd></span>
        </div>
      </div>
    </div>
  );
};
