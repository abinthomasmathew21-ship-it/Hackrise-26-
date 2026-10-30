import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/hackathonData';
import { ArrowRight, Check } from 'lucide-react';

interface HowItWorksProps {
  onOpenRegister: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenRegister }) => {
  return (
    <section id="rules" className="py-20 sm:py-28 bg-white border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              <span className="w-2.5 h-0.5 bg-red-600"></span>
              <span>PARTICIPATION ROADMAP</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 font-normal">STEP-BY-STEP</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              HOW IT <span className="text-red-600">WORKS</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              From registration on Devpost to the final victory stage on 26 January 2027. Here is the 7-step blueprint for your hackathon journey.
            </p>
          </div>
        </div>

        {/* Step-by-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => {
            const isLast = index === HOW_IT_WORKS_STEPS.length - 1;

            return (
              <div
                key={stepItem.step}
                className={`relative p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 ${
                  isLast 
                    ? 'bg-red-600 text-white border-red-700 shadow-xl' 
                    : 'bg-neutral-50 text-neutral-900 border-neutral-200 hover:border-neutral-900 hover:bg-white'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                {/* Step number badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-['Anton'] text-3xl sm:text-4xl leading-none ${
                        isLast ? 'text-white' : 'text-red-600'
                      }`}
                    >
                      {stepItem.step}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase font-bold tracking-widest ${
                        isLast ? 'text-red-200' : 'text-neutral-400'
                      }`}
                    >
                      PHASE 0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-['Space_Grotesk'] text-lg font-bold tracking-tight mb-2 ${
                      isLast ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {stepItem.title}
                  </h3>

                  {/* Primary text from prompt */}
                  <p
                    className={`font-medium text-sm mb-3 ${
                      isLast ? 'text-red-100' : 'text-neutral-700'
                    }`}
                  >
                    {stepItem.description}
                  </p>

                  {/* Secondary detail */}
                  <p
                    className={`text-xs leading-relaxed ${
                      isLast ? 'text-white/80' : 'text-neutral-500'
                    }`}
                  >
                    {stepItem.detail}
                  </p>
                </div>

                {/* Bottom marker */}
                <div
                  className={`mt-6 pt-3 border-t flex items-center justify-between text-xs font-mono ${
                    isLast ? 'border-red-500/50 text-red-100' : 'border-neutral-200 text-neutral-400'
                  }`}
                >
                  <span>STEP STATUS</span>
                  <span className="font-semibold uppercase">
                    {isLast ? 'VICTORY' : 'REQUIRED'}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Quick Register Action Card as 8th slot */}
          <div
            className="p-6 sm:p-7 bg-neutral-950 text-white border border-neutral-900 flex flex-col justify-between"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold mb-2">
                READY TO BEGIN?
              </div>
              <h3 className="font-['Anton'] text-2xl tracking-wide mb-2">
                YOUR JOURNEY STARTS NOW
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Don't wait until the deadline. Secure your spot on Devpost and assemble your 2–3 member squad today.
              </p>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>REGISTER YOUR SQUAD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
