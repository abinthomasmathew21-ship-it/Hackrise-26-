import React, { useState } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/hackathonData';
import { Clock, Flag, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [activePhase, setActivePhase] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');

  const filteredEvents = activePhase === 'all' 
    ? TIMELINE_EVENTS 
    : TIMELINE_EVENTS.filter(e => e.phase === activePhase);

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              <span className="w-2.5 h-0.5 bg-red-600"></span>
              <span>EVENT RUN OF SHOW</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 font-normal">26 JANUARY 2027</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              12-HOUR HACKATHON <span className="text-red-600">TIMELINE</span>
            </h2>
          </div>

          {/* Interactive Phase Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-neutral-300">
            <button
              onClick={() => setActivePhase('all')}
              className={`px-3 py-1.5 text-xs font-mono font-semibold transition-colors ${
                activePhase === 'all'
                  ? 'bg-red-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              All 12 Hours
            </button>
            <button
              onClick={() => setActivePhase('morning')}
              className={`px-3 py-1.5 text-xs font-mono font-semibold transition-colors ${
                activePhase === 'morning'
                  ? 'bg-red-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Morning
            </button>
            <button
              onClick={() => setActivePhase('afternoon')}
              className={`px-3 py-1.5 text-xs font-mono font-semibold transition-colors ${
                activePhase === 'afternoon'
                  ? 'bg-red-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Afternoon
            </button>
            <button
              onClick={() => setActivePhase('evening')}
              className={`px-3 py-1.5 text-xs font-mono font-semibold transition-colors ${
                activePhase === 'evening'
                  ? 'bg-red-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Evening / Demos
            </button>
          </div>
        </div>

        {/* Timeline Visual Container with Red Accent Connected Line */}
        <div className="relative mt-8">
          {/* Vertical Red Connecting Line (left on mobile, center on lg) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-red-600 -translate-x-1/2 hidden sm:block" />

          {/* Mobile continuous line */}
          <div className="absolute left-4 top-4 bottom-4 w-1 bg-red-600 sm:hidden" />

          <div className="space-y-8 sm:space-y-12">
            {filteredEvents.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box (takes 1/2 of width on desktop) */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div
                      className="p-6 bg-white border-2 border-neutral-900 shadow-sm hover:border-red-600 hover:shadow-md transition-all group relative"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                      }}
                    >
                      {/* Top red notch marker */}
                      <div className="absolute top-0 left-0 w-8 h-1 bg-red-600 group-hover:w-full transition-all duration-300" />

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-red-600 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-red-600" />
                          {item.time}
                        </span>
                        <span className="font-mono text-[10px] uppercase font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="font-['Space_Grotesk'] text-lg font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Red Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center">
                    <div className="w-7 h-7 bg-neutral-950 border-2 border-red-600 flex items-center justify-center shadow-md">
                      <div className="w-2.5 h-2.5 bg-red-600 animate-pulse" />
                    </div>
                  </div>

                  {/* Empty side for layout symmetry on desktop */}
                  <div className="hidden sm:block sm:w-1/2 sm:px-8" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Hard Deadline Alert Card */}
        <div className="mt-16 bg-neutral-900 border-l-4 border-red-600 p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center text-red-500 shrink-0">
              <Flag className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold">
                CRITICAL MILESTONE // HARD STOP
              </div>
              <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white mt-1">
                07:00 PM: Project Submission Deadline
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-2xl">
                All code commits, Devpost project descriptions, public repositories, and pitch slide decks must be finalized by 07:00 PM. No extensions will be granted.
              </p>
            </div>
          </div>

          <div className="shrink-0 font-mono text-xs text-neutral-300 bg-neutral-950 px-4 py-2 border border-neutral-800">
            TOTAL TIME: <strong className="text-red-500">720 MINUTES</strong>
          </div>
        </div>

      </div>
    </section>
  );
};
