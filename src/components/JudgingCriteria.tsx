import React from 'react';
import { JUDGING_CRITERIA } from '../data/hackathonData';
import { Award, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';

export const JudgingCriteria: React.FC = () => {
  return (
    <section id="judging" className="py-20 sm:py-28 bg-white border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              <span className="w-2.5 h-0.5 bg-red-600"></span>
              <span>TRANSPARENT EVALUATION</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 font-normal">100-POINT RUBRIC</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              JUDGING <span className="text-red-600">CRITERIA</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Every project will be independently assessed by our panel of industry leaders, startup founders, and technical architects against 7 clear benchmarks.
            </p>
          </div>
        </div>

        {/* Judging Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JUDGING_CRITERIA.map((criterion, index) => {
            return (
              <div
                key={criterion.id}
                className="p-6 sm:p-7 bg-neutral-50 border border-neutral-300 hover:border-red-600 hover:bg-white transition-all duration-200 relative flex flex-col justify-between group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}
              >
                {/* Top Corner Red Indicator */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none border-t-2 border-r-2 border-transparent group-hover:border-red-600 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-red-600 transition-colors">
                      RUBRIC CRITERION 0{index + 1}
                    </span>
                    <div className="px-2.5 py-1 bg-red-600 text-white font-['Space_Grotesk'] text-sm font-bold">
                      {criterion.weight}
                    </div>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-neutral-900 mb-2">
                    {criterion.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {criterion.description}
                  </p>
                </div>

                {/* Judge Questions */}
                <div className="pt-4 border-t border-neutral-200">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold block mb-1.5">
                    What Judges Evaluate:
                  </span>
                  <ul className="space-y-1.5">
                    {criterion.focusQuestions.map((q, i) => (
                      <li key={i} className="text-xs text-neutral-700 flex items-start gap-1.5">
                        <span className="text-red-600 font-bold font-mono">›</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Cumulative Score Summary Card */}
          <div
            className="p-6 sm:p-7 bg-neutral-900 text-white border-2 border-neutral-900 flex flex-col justify-between"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
            }}
          >
            <div>
              <div className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest font-bold mb-3">
                <Scale className="w-4 h-4" />
                <span>CUMULATIVE SCORING</span>
              </div>
              <h3 className="font-['Anton'] text-3xl tracking-wide mb-2">
                TOTAL: 100% WEIGHTAGE
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                Scores across all 7 criteria are aggregated transparently. In case of a tie, Technical Implementation and Problem Solving scores serve as primary tiebreakers.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Blind Judging System</span>
              <span className="text-red-400 font-semibold">Strict Anti-Bias</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
