import React from 'react';
import { Countdown } from './Countdown';
import { Flame, ArrowRight, ExternalLink, Calendar } from 'lucide-react';
import { EVENT_DETAILS } from '../data/hackathonData';

interface FinalCTAProps {
  onOpenRegister: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRegister }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-red-600 text-white overflow-hidden">
      {/* High-energy background geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
      
      {/* Decorative white tech pattern dots */}
      <div className="absolute inset-0 tech-grid-dots-white opacity-20 pointer-events-none" />

      {/* Decorative background typography */}
      <div className="absolute -bottom-10 right-0 font-['Anton'] text-[140px] sm:text-[220px] text-red-700/25 leading-none select-none pointer-events-none overflow-hidden">
        HACKRISE
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Triad Staccato Headline: YOUR IDEA. YOUR CODE. YOUR RISE. */}
        <div className="space-y-1 mb-6">
          <div className="font-['Anton'] text-3xl sm:text-5xl md:text-6xl tracking-wider text-red-100 uppercase">
            YOUR IDEA.
          </div>
          <div className="font-['Anton'] text-4xl sm:text-6xl md:text-7xl tracking-wider text-white uppercase">
            YOUR CODE.
          </div>
          <div className="font-['Anton'] text-5xl sm:text-7xl md:text-8xl tracking-wider text-white uppercase drop-shadow-md">
            YOUR <span className="underline decoration-white decoration-wavy underline-offset-8">RISE.</span>
          </div>
        </div>

        {/* Hackathon Name & Date */}
        <div className="mt-8 mb-4 inline-flex flex-col items-center">
          <div className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-1">
            HACKRISE ’26
          </div>
          <div className="font-mono text-sm sm:text-base font-bold tracking-widest text-red-100 uppercase bg-red-700/80 px-4 py-1 border border-red-400">
            26 JANUARY 2027 · 12 HOURS NON-STOP
          </div>
        </div>

        {/* Repeated Live Countdown as explicitly requested */}
        <div className="mt-10 mb-12 max-w-xl mx-auto">
          <Countdown theme="red" size="md" showLabel={true} />
        </div>

        {/* Big Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-neutral-100 text-red-600 font-['Space_Grotesk'] font-bold text-base tracking-wider uppercase shadow-2xl transition-all active:scale-[0.98]"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
            }}
          >
            <Flame className="w-5 h-5 text-red-600" />
            <span>REGISTER NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={EVENT_DETAILS.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-red-700/80 hover:bg-red-800 text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-white/80 transition-all"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
            }}
          >
            <span>Open Devpost Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Cross college footer reassurance */}
        <div className="mt-12 text-xs font-mono text-red-200">
          Open to all engineering, polytechnic &amp; degree colleges · Team Size: 2–3 Members
        </div>

      </div>
    </section>
  );
};
