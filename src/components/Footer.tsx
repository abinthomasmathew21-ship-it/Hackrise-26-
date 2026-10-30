import React from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { ExternalLink, Flame, Shield, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenPoster: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister, onOpenPoster }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-['Anton'] text-lg">
                H
              </div>
              <span className="font-['Anton'] text-2xl text-white tracking-wider">
                HACKRISE <span className="text-red-600">’26</span>
              </span>
            </div>
            
            <p className="font-['Space_Grotesk'] text-white font-semibold text-base mb-2">
              {EVENT_DETAILS.tagline}
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-4">
              Inter-College 12-Hour Hackathon taking place on 26 January 2027. Bringing passionate student builders, designers, and innovators together to develop real-world tech solutions.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="text-red-500 font-bold">DATE:</span>
              <span className="text-white">26 JANUARY 2027</span>
              <span>·</span>
              <span className="text-white">12 HOURS</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wider text-white font-bold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About HackRise</a></li>
              <li><a href="#domains" className="hover:text-red-400 transition-colors">6 Domains</a></li>
              <li><a href="#timeline" className="hover:text-red-400 transition-colors">12-Hour Timeline</a></li>
              <li><a href="#rules" className="hover:text-red-400 transition-colors">How It Works</a></li>
              <li><a href="#judging" className="hover:text-red-400 transition-colors">Judging Criteria</a></li>
              <li><a href="#prizes" className="hover:text-red-400 transition-colors">Prizes &amp; Awards</a></li>
              <li><a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Institutional Partners */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white font-bold block mb-4">
              Organization
            </span>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] uppercase text-neutral-500 font-mono block">Associated With</span>
                <span className="text-white font-semibold block">Orbinex Innovations</span>
                <span className="text-neutral-400 text-[11px]">Technology &amp; Startup Incubation</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-neutral-500 font-mono block">Associated With</span>
                <span className="text-white font-semibold block">MBC : 80</span>
                <span className="text-neutral-400 text-[11px]">"Wisdom Beyond Walls" · MBCCET Peermade</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-neutral-500 font-mono block">Supporting Partner</span>
                <span className="text-red-400 font-semibold block">µLearn MBCCET</span>
                <span className="text-neutral-400 text-[11px]">Student Micro-learning Community</span>
              </div>
            </div>
          </div>

          {/* Quick Actions & Devpost */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-white font-bold block mb-4">
                Portals
              </span>
              <div className="space-y-2">
                <a
                  href={EVENT_DETAILS.devpostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-mono"
                >
                  <span>Official Devpost</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onOpenPoster}
                  className="text-left text-xs text-neutral-300 hover:text-white font-mono block"
                >
                  "Moorthy Gang" Poster
                </button>
                <button
                  onClick={onOpenRegister}
                  className="text-left text-xs text-red-500 hover:text-red-400 font-mono font-bold block"
                >
                  Register Squad &rarr;
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © 2026–2027 HACKRISE. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Inter-College 12-Hour Sprint</span>
            <span>·</span>
            <span>26 January 2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
