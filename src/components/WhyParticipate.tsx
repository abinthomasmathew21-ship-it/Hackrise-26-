import React from 'react';
import { WHY_PARTICIPATE } from '../data/hackathonData';
import { Code2, Cpu, Timer, Users2, Network, Sparkles, Award, Trophy, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Timer,
  Users2,
  Network,
  Sparkle: Sparkles,
  Award,
  Trophy,
};

interface WhyParticipateProps {
  onOpenRegister: () => void;
}

export const WhyParticipate: React.FC<WhyParticipateProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-20 sm:py-28 bg-neutral-900 text-white relative tech-grid-dark">
      {/* Red accent top divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
              <span className="w-2.5 h-0.5 bg-red-500"></span>
              <span>GROWTH &amp; ACCELERATION</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400 font-normal">TANGIBLE BENEFITS</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              WHY <span className="text-red-600">PARTICIPATE?</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              More than a competition — HACKRISE ’26 is a catalyst to expand your network, elevate your engineering craft, and launch real software products.
            </p>
          </div>
        </div>

        {/* 8 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_PARTICIPATE.map((item, index) => {
            const Icon = iconMap[item.iconName] || Trophy;

            return (
              <div
                key={item.title}
                className="p-6 bg-neutral-950 border border-neutral-800 hover:border-red-600 transition-all duration-200 flex flex-col justify-between group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">KEY TAKEAWAY</span>
                  <span className="text-red-400 font-semibold">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-neutral-950 border-2 border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white">
              Ready to rise above ordinary classroom assignments?
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Join students from colleges across the state on 26 January 2027.
            </p>
          </div>

          <button
            onClick={onOpenRegister}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all shadow-md"
          >
            <span>Claim Your Spot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
