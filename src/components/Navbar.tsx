import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'World', href: '/world' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const secondaryLinks = [
    { name: 'Publications', href: '/publications' },
    { name: 'GitHub Sync', href: '/github' },
    { name: 'Astronomy', href: '/astronomy' },
    { name: 'Music & Sarod', href: '/music' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Uses / Rice', href: '/uses' },
    { name: 'Now', href: '/now' },
    { name: 'Guestbook', href: '/guestbook' },
    { name: 'Links & Webring', href: '/links' },
    { name: 'Privacy', href: '/privacy' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
      isScrolled 
        ? 'bg-[#030508]/90 backdrop-blur-md border-b border-[#1d2a3e]' 
        : 'bg-[#030508]/60 backdrop-blur-sm border-b border-[#1d2a3e]/40'
    }`}>
      {/* Top telemetry bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 text-[11px] text-gray-500 border-b border-[#141e2e] bg-[#020305]/80 select-none">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYS_STATUS: ONLINE</span>
          </span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">OS: ARCH_LINUX // HYPRLAND</span>
          <span className="text-gray-600">|</span>
          <span className="text-cyan-400/80">LATITUDE: 5D_BULK // ULTRAHYPERBOLIC</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">LOC: BENGALURU, IN</span>
          <span className="text-gray-600">|</span>
          <span className="text-amber-400/80">COMMITS: 93+ AUTHENTIC</span>
          <span className="text-gray-600">|</span>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
            className="text-gray-300 hover:text-emerald-400 flex items-center space-x-1 cursor-pointer"
          >
            <span className="border border-gray-700 rounded px-1 text-[10px]">Ctrl+K</span>
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Main navigation row */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand identity */}
        <a href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded bg-[#0d131e] border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-sm group-hover:border-emerald-400 group-hover:shadow-cyber-sm transition-all">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-wider text-sm group-hover:text-emerald-300 transition-colors">
              MAX <span className="text-emerald-500 text-xs font-normal">/ Koundinya</span>
            </span>
            <span className="text-[10px] text-gray-500 -mt-1 hidden sm:block">Theoretical Physics & Systems</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-1">
          {mainLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs rounded transition-all ${
                  active
                    ? 'hud-slot-active text-emerald-300 font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-[#0d131e]'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
              className="px-3 py-1.5 text-xs rounded text-gray-400 hover:text-white hover:bg-[#0d131e] flex items-center space-x-1 transition-all"
            >
              <span>More</span>
              <svg className={`w-3 h-3 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-[#0a0f18] border border-[#1d2a3e] shadow-2xl py-2 z-50 text-xs">
                <div className="px-3 py-1 text-[10px] font-semibold text-gray-500 uppercase tracking-wider border-b border-[#141e2e]">
                  Subsystems & Archives
                </div>
                {secondaryLinks.map((sublink) => (
                  <a
                    key={sublink.name}
                    href={sublink.href}
                    className="block px-4 py-1.5 text-gray-300 hover:text-emerald-300 hover:bg-[#131b28] transition-colors"
                  >
                    {sublink.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          {/* Quick search shortcut button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
            className="p-2 rounded text-gray-400 hover:text-emerald-400 hover:bg-[#0d131e] border border-transparent hover:border-[#1d2a3e] transition-all cursor-pointer"
            title="Search (Ctrl+K)"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-gray-400 hover:text-white hover:bg-[#0d131e]"
            aria-label="Open Navigation Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b10] border-b border-[#1d2a3e] px-4 pt-2 pb-6 space-y-1">
          <div className="text-[10px] text-emerald-500 font-semibold uppercase tracking-wider px-3 py-1">
            Navigation Nodes
          </div>
          {mainLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded text-sm ${
                isActive(link.href)
                  ? 'bg-emerald-500/10 text-emerald-400 font-bold'
                  : 'text-gray-300 hover:bg-[#0d131e]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#141e2e]">
            <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider px-3 py-1">
              Archives & Modules
            </div>
            <div className="grid grid-cols-2 gap-1">
              {secondaryLinks.map((sublink) => (
                <a
                  key={sublink.name}
                  href={sublink.href}
                  className="px-3 py-1.5 rounded text-xs text-gray-400 hover:text-white hover:bg-[#0d131e]"
                >
                  {sublink.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
