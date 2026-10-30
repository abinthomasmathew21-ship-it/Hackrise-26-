import React, { useState } from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { Users2, School, CheckCircle2, ShieldCheck, Sparkles, UserPlus, HelpCircle } from 'lucide-react';

interface TeamInfoProps {
  onOpenRegister: () => void;
  onOpenPoster: () => void;
}

export const TeamInfo: React.FC<TeamInfoProps> = ({ onOpenRegister, onOpenPoster }) => {
  // Interactive Squad balance simulator
  const [hasTechLead, setHasTechLead] = useState(true);
  const [hasFrontend, setHasFrontend] = useState(true);
  const [hasPitcher, setHasPitcher] = useState(false);

  const teamScore = (hasTechLead ? 35 : 0) + (hasFrontend ? 35 : 0) + (hasPitcher ? 30 : 0);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              <span className="w-2.5 h-0.5 bg-red-600"></span>
              <span>SQUAD REGULATIONS</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 font-normal">FORMATION RULES</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              TEAM <span className="text-red-600">INFORMATION</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Great products are born from cross-disciplinary synergy. Assemble your crew and get ready to storm the arena.
            </p>
          </div>
        </div>

        {/* 2 Big Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Team Size 2-3 Members */}
          <div 
            className="p-8 sm:p-10 bg-neutral-900 text-white border-2 border-neutral-900 relative"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
            }}
          >
            <div className="absolute top-0 left-0 w-24 h-1.5 bg-red-600" />
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center text-white">
                <Users2 className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold">
                MANDATORY RULE
              </span>
            </div>

            <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1">
              Official Requirement
            </div>
            <h3 className="font-['Anton'] text-4xl sm:text-5xl text-white tracking-wide mb-4">
              TEAM SIZE: 2–3 MEMBERS
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Every team must comprise strictly <strong>2 or 3 active members</strong>. Solo entries are strictly disallowed to encourage pair programming, distributed testing, and agile collaboration under time constraints.
            </p>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Solo Entries: ❌ Not Allowed</span>
              <span className="text-red-400 font-semibold">Max: 3 Members</span>
            </div>
          </div>

          {/* Card 2: Inter-College Cross Collaboration */}
          <div 
            className="p-8 sm:p-10 bg-red-600 text-white border-2 border-red-700 relative shadow-xl"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-white text-red-600 flex items-center justify-center">
                <School className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-red-200 uppercase tracking-widest font-bold">
                NO WALLS POLICY
              </span>
            </div>

            <div className="font-mono text-xs text-red-200 uppercase tracking-widest mb-1">
              Cross-Institution Unity
            </div>
            <h3 className="font-['Anton'] text-4xl sm:text-5xl text-white tracking-wide mb-4">
              CROSS-COLLEGE COLLABORATION
            </h3>

            <p className="text-red-50 text-sm sm:text-base leading-relaxed mb-6">
              <strong>Participants from different colleges can freely collaborate and compete together in the same squad!</strong> Your team does not have to be from the same college, department, or graduation year.
            </p>

            <div className="pt-6 border-t border-red-500 flex items-center justify-between text-xs font-mono text-red-100">
              <span>Inter-College Teams: ✅ Encouraged</span>
              <span>Different Branches: ✅ Welcome</span>
            </div>
          </div>

        </div>

        {/* Interactive "Moorthy Gang" Squad Balance Checker */}
        <div className="bg-neutral-50 border-2 border-neutral-900 p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-wider">
                  Squad Readiness Planner
                </span>
                <span className="text-neutral-300">/</span>
                <span className="text-xs text-neutral-500 italic">"Come With your Moorthy Gang"</span>
              </div>
              <h4 className="font-['Space_Grotesk'] text-2xl font-bold text-neutral-900">
                Recommended 2–3 Member Role Distribution
              </h4>
              <p className="text-neutral-600 text-xs sm:text-sm mt-1 max-w-2xl">
                The most successful hackathon teams balance heavy-duty backend engineering with clean interface design and compelling pitch delivery.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenPoster}
                className="text-xs font-mono font-bold text-neutral-700 hover:text-red-600 underline"
              >
                Inspect Official Gang Poster &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            
            {/* Role 1 */}
            <div 
              onClick={() => setHasTechLead(!hasTechLead)}
              className={`p-5 border cursor-pointer transition-all ${
                hasTechLead ? 'bg-white border-red-600 shadow-sm' : 'bg-neutral-100/70 border-neutral-300 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-red-600">MEMBER 01</span>
                <div className={`w-5 h-5 flex items-center justify-center rounded-none text-xs ${hasTechLead ? 'bg-red-600 text-white' : 'border border-neutral-400'}`}>
                  {hasTechLead && '✓'}
                </div>
              </div>
              <h5 className="font-['Space_Grotesk'] text-base font-bold text-neutral-900 mb-1">
                Core Hacker / Backend
              </h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Builds APIs, database schemas, business logic, integrations, AI models, and ensures system stability.
              </p>
            </div>

            {/* Role 2 */}
            <div 
              onClick={() => setHasFrontend(!hasFrontend)}
              className={`p-5 border cursor-pointer transition-all ${
                hasFrontend ? 'bg-white border-red-600 shadow-sm' : 'bg-neutral-100/70 border-neutral-300 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-red-600">MEMBER 02</span>
                <div className={`w-5 h-5 flex items-center justify-center rounded-none text-xs ${hasFrontend ? 'bg-red-600 text-white' : 'border border-neutral-400'}`}>
                  {hasFrontend && '✓'}
                </div>
              </div>
              <h5 className="font-['Space_Grotesk'] text-base font-bold text-neutral-900 mb-1">
                Frontend &amp; UI / UX Architect
              </h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Builds responsive web/mobile user journeys, client state, aesthetic finish, and frictionless controls.
              </p>
            </div>

            {/* Role 3 */}
            <div 
              onClick={() => setHasPitcher(!hasPitcher)}
              className={`p-5 border cursor-pointer transition-all ${
                hasPitcher ? 'bg-white border-red-600 shadow-sm' : 'bg-neutral-100/70 border-neutral-300 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-red-600">MEMBER 03 (OPTIONAL)</span>
                <div className={`w-5 h-5 flex items-center justify-center rounded-none text-xs ${hasPitcher ? 'bg-red-600 text-white' : 'border border-neutral-400'}`}>
                  {hasPitcher && '✓'}
                </div>
              </div>
              <h5 className="font-['Space_Grotesk'] text-base font-bold text-neutral-900 mb-1">
                Product Lead &amp; Demo Pitcher
              </h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Curates slide decks, problem validation, demo storyline, user testing, and leads the judge Q&amp;A defense.
              </p>
            </div>

          </div>

          {/* Squad Readiness Score Meter */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase font-bold text-neutral-700">
                Squad Readiness Index:
              </span>
              <div className="w-36 h-3 bg-neutral-200 overflow-hidden">
                <div 
                  className="h-full bg-red-600 transition-all duration-300"
                  style={{ width: `${teamScore}%` }}
                />
              </div>
              <span className="font-mono text-xs font-bold text-red-600">
                {teamScore}%
              </span>
            </div>

            <button
              onClick={onOpenRegister}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase font-bold tracking-wider transition-colors shadow-sm"
            >
              Register Squad on Devpost &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
