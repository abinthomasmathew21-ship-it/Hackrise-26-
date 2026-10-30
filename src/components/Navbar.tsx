import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { Menu, X, Flame, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenPoster: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenPoster }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Domains', href: '#domains' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Rules', href: '#rules' },
    { label: 'Judging', href: '#judging' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-red-600 shadow-md py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-neutral-200 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-red-600 flex items-center justify-center text-white font-['Anton'] text-xl tracking-tighter shadow-sm group-hover:bg-red-700 transition-colors">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-['Anton'] text-2xl tracking-wider text-neutral-900 leading-none flex items-center gap-1.5">
                <span>HACKRISE</span>
                <span className="text-red-600">’26</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-semibold">
                12-Hour Inter-College
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-sm text-neutral-700 hover:text-red-600 transition-colors relative py-1 hover:border-b-2 hover:border-red-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPoster}
              className="flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-600 hover:text-red-600 px-3 py-1.5 border border-neutral-300 hover:border-red-600 bg-neutral-50 transition-colors"
              title="View Official Teaser Poster"
            >
              <ImageIcon className="w-3.5 h-3.5 text-red-600" />
              <span>Teaser Poster</span>
            </button>

            <button
              onClick={onOpenRegister}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] font-bold text-xs tracking-wider uppercase px-4 py-2 shadow-sm transition-all active:scale-[0.98]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
              }}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>REGISTER NOW</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenRegister}
              className="sm:hidden bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] font-bold text-xs tracking-wider uppercase px-3 py-1.5"
            >
              REGISTER
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 border border-neutral-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-200 pb-4 animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-red-50 hover:text-red-600 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPoster();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono font-semibold bg-neutral-100 text-neutral-800 border border-neutral-300"
                >
                  <ImageIcon className="w-4 h-4 text-red-600" />
                  <span>View Official Teaser Poster</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white font-['Space_Grotesk'] font-bold text-sm tracking-wider uppercase"
                >
                  <Flame className="w-4 h-4" />
                  <span>REGISTER NOW</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
