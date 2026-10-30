import React, { useState } from 'react';
import { DOMAINS, DomainItem } from '../data/hackathonData';
import { BrainCircuit, ShieldAlert, Smartphone, CloudCog, Layers, Sparkles, ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface DomainsProps {
  onOpenRegister: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  ShieldAlert,
  Smartphone,
  CloudCog,
  Layers,
  Sparkles,
};

export const Domains: React.FC<DomainsProps> = ({ onOpenRegister }) => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const toggleDomain = (id: string) => {
    setSelectedDomain((prev) => (prev === id ? null : id));
  };

  return (
    <section id="domains" className="py-20 sm:py-28 bg-neutral-950 text-white relative tech-grid-dark overflow-hidden">
      {/* Top red border accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
              <span className="w-2.5 h-0.5 bg-red-500"></span>
              <span>TRACKS &amp; CHALLENGES</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400 font-normal">6 CORE DOMAINS</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              HACKATHON <span className="text-red-600">DOMAINS</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Choose your domain of focus. Whether you are building autonomous AI pipelines, securing vital infrastructure, or pioneering open innovation, there is a dedicated track for your team.
            </p>
          </div>
        </div>

        {/* 6 Modern Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAINS.map((domain, index) => {
            const Icon = iconMap[domain.iconName] || Sparkles;
            const isExpanded = selectedDomain === domain.id;

            return (
              <div
                key={domain.id}
                className={`flex flex-col justify-between bg-neutral-900 border transition-all duration-200 relative ${
                  isExpanded ? 'border-red-600 shadow-xl shadow-red-950/40 bg-neutral-900/90' : 'border-neutral-800 hover:border-neutral-600'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                {/* Red index badge */}
                <div className="flex items-center justify-between px-6 pt-6 pb-2">
                  <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-500">
                    TRACK // 0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="px-6 py-4 flex-1">
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {domain.title}
                  </h3>
                  
                  {/* Exact prompt sentence */}
                  <p className="text-neutral-300 font-medium text-sm mb-3">
                    {domain.shortDesc}
                  </p>

                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    {domain.fullDesc}
                  </p>

                  {/* Expanded idea prompts */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-neutral-800 animate-in fade-in duration-200 space-y-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1.5">
                          Sample Inspiration &amp; Problem Areas:
                        </span>
                        <ul className="space-y-1.5">
                          {domain.ideas.map((idea, i) => (
                            <li key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                              <span className="text-red-500 font-mono mt-0.5">•</span>
                              <span>{idea}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
                          Suggested Technologies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {domain.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] px-2 py-0.5 bg-neutral-950 border border-neutral-800 text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Button */}
                <div className="px-6 pb-6 pt-2 border-t border-neutral-800/60 mt-auto flex items-center justify-between">
                  <button
                    onClick={() => toggleDomain(domain.id)}
                    className="flex items-center gap-1.5 text-xs font-mono font-semibold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Ideas & Stacks' : 'Explore Ideas & Stacks'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={onOpenRegister}
                    className="text-neutral-500 hover:text-white transition-colors"
                    title="Register for this track"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain Bottom Info Notice */}
        <div className="mt-12 p-4 bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="w-2 h-2 bg-red-600 inline-block"></span>
            <span>Teams can select or shift their chosen domain anytime before the 09:30 AM Architecture Freeze.</span>
          </div>
          <button
            onClick={onOpenRegister}
            className="text-red-400 hover:text-red-300 font-bold uppercase underline underline-offset-4 shrink-0"
          >
            Register Your Squad on Devpost &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
