import React from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { Countdown } from './Countdown';
import { Flame, ArrowRight, Sparkles, Terminal, Code2, Users, Shield, Cpu, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenPoster: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenPoster }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white tech-grid">
      {/* Subtle geometric red accent background elements */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Decorative Tech Grid Lines & Crosshairs */}
      <div className="absolute top-24 left-6 hidden lg:block font-mono text-[10px] text-neutral-400 select-none">
        <div>[SYS_ID: HKRS-2027]</div>
        <div className="text-red-500 font-semibold">STATUS: REGISTRATION_OPEN</div>
        <div>REGION: ASIA_IN // PEERMADE</div>
      </div>
      <div className="absolute top-24 right-6 hidden lg:block font-mono text-[10px] text-neutral-400 text-right select-none">
        <div>LAT: 9.5878° N / LON: 76.9856° E</div>
        <div>SPRINT_WINDOW: 12_HOURS_CONTINUOUS</div>
        <div className="text-neutral-600">HOST: MBC_CAMPUS</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Top Pill-free Kicker: Date & Format & Organizers */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono uppercase tracking-wider mb-6">
            <span className="font-bold text-red-600 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-red-600 inline-block animate-pulse"></span>
              26 JANUARY 2027
            </span>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-800 font-semibold">
              12-HOUR INTER-COLLEGE HACKATHON
            </span>
            <span className="text-neutral-300 hidden sm:inline">/</span>
            <span className="text-neutral-500 hidden sm:inline">
              ORBINEX × MBC : 80
            </span>
          </div>

          {/* Massive Display Title */}
          <div className="relative mb-4">
            <h1 className="font-['Anton'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-neutral-950 leading-[0.9] select-none">
              HACK<span className="text-red-600">RISE</span>
              <span className="text-neutral-900 ml-2">’26</span>
            </h1>
            
            {/* Red Accent underline bar */}
            <div className="w-24 sm:w-36 h-2 bg-red-600 mx-auto mt-4" />
          </div>

          {/* Tagline */}
          <p className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-bold text-neutral-800 tracking-tight max-w-3xl mt-2 mb-3">
            Where Ideas Rise, Innovation Begins.
          </p>

          {/* Sub-description with squad hook */}
          <p className="text-neutral-600 max-w-2xl text-base sm:text-lg mb-8 leading-relaxed">
            Kerala's high-octane 12-hour collegiate prototyping sprint. Assemble your 2–3 member squad, hack real problems across 6 technology domains, and compete with the brightest minds.
          </p>

          {/* Teaser Poster Quick Banner "Come With your Moorthy Gang" */}
          <button
            onClick={onOpenPoster}
            className="group mb-8 inline-flex items-center gap-3 px-4 py-2 bg-neutral-900 hover:bg-neutral-950 text-white border-l-4 border-red-600 shadow-md transition-all text-left"
          >
            <div className="w-8 h-10 border border-neutral-700 overflow-hidden shrink-0 bg-neutral-800">
              <img
                src={EVENT_DETAILS.posterImage}
                alt="Moorthy Gang Poster thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                <span>Official Teaser Notice</span>
                <Sparkles className="w-3 h-3 text-red-400" />
              </div>
              <div className="text-sm font-semibold text-white">
                "Come With your <span className="text-red-500 font-bold italic font-serif">Moorthy Gang</span>"
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all ml-1" />
          </button>

          {/* Prominent Live Countdown to HACKRISE ’26 */}
          <div className="w-full max-w-2xl mb-10">
            <Countdown theme="dark" size="lg" showLabel={true} />
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] font-bold text-base tracking-wider uppercase transition-all shadow-lg hover:shadow-red-600/25 active:scale-[0.98]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
            >
              <Flame className="w-5 h-5 text-white animate-pulse" />
              <span>REGISTER NOW</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#about"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 font-['Space_Grotesk'] font-bold text-base tracking-wider uppercase border-2 border-neutral-900 transition-all hover:border-red-600 hover:text-red-600 active:scale-[0.98]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
            >
              <span>EXPLORE HACKATHON</span>
            </a>
          </div>

          {/* Subtle Live Stats / Terminal Bar */}
          <div className="mt-14 w-full max-w-4xl border-t border-b border-neutral-200 py-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono">
            <div className="px-3 border-l-2 border-red-600">
              <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Sprint Duration</span>
              <span className="text-neutral-900 font-bold text-sm">12 Hours Non-Stop</span>
            </div>
            <div className="px-3 border-l-2 border-neutral-900">
              <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Squad Capacity</span>
              <span className="text-neutral-900 font-bold text-sm">2–3 Members / Team</span>
            </div>
            <div className="px-3 border-l-2 border-red-600">
              <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Eligibility</span>
              <span className="text-neutral-900 font-bold text-sm">Inter-College (All Stds)</span>
            </div>
            <div className="px-3 border-l-2 border-neutral-900">
              <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Hosting Campus</span>
              <span className="text-neutral-900 font-bold text-sm">MBCCET Peermade</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
