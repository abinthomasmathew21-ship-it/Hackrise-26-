import React from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { Building2, GraduationCap, Users2, Sparkles, Image as ImageIcon, ArrowUpRight } from 'lucide-react';

interface OrganizersProps {
  onOpenPoster: () => void;
  onOpenRegister: () => void;
}

export const Organizers: React.FC<OrganizersProps> = ({ onOpenPoster, onOpenRegister }) => {
  return (
    <section className="py-20 sm:py-28 bg-neutral-900 text-white relative tech-grid-dark">
      {/* Top red border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
              <span className="w-2.5 h-0.5 bg-red-500"></span>
              <span>LEADERSHIP &amp; COMMUNITY</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400 font-normal">ECOSYSTEM ALLIANCES</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              ORGANIZERS &amp; <span className="text-red-600">PARTNERS</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Powered by industry innovators and academic excellence. Together driving technical empowerment and startup entrepreneurship for young developers.
            </p>
          </div>
        </div>

        {/* Partners Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Associated With: 2 Major Partners */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest">
              <span className="w-2 h-2 bg-red-600 inline-block"></span>
              <span className="text-white font-bold">ASSOCIATED WITH</span>
              <span className="text-neutral-600">/</span>
              <span>HOST &amp; INNOVATION LEAD</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Partner 1: Orbinex Innovations */}
              <div 
                className="p-8 bg-neutral-950 border border-neutral-800 hover:border-red-600 transition-all flex flex-col justify-between group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                <div>
                  <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold block mb-1">
                    Industry Partner
                  </span>
                  <h3 className="font-['Anton'] text-2xl sm:text-3xl tracking-wide text-white mb-2">
                    ORBINEX INNOVATIONS
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Leading technology incubation, product research, and enterprise digital solutions. Providing hackathon mentorship and incubation opportunities.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between font-mono text-xs text-neutral-500">
                  <span>Ecosystem Lead</span>
                  <span className="text-neutral-300 font-semibold">orbinex.io</span>
                </div>
              </div>

              {/* Partner 2: MBC : 80 */}
              <div 
                className="p-8 bg-neutral-950 border border-neutral-800 hover:border-red-600 transition-all flex flex-col justify-between group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                <div>
                  <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-semibold block mb-1">
                    Institutional Legacy
                  </span>
                  <h3 className="font-['Anton'] text-2xl sm:text-3xl tracking-wide text-white mb-1">
                    MBC : 80
                  </h3>
                  <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                    "Wisdom Beyond Walls"
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Mar Baselios Christian College of Engineering &amp; Technology (MBCCET), Peermade, Idukki. Celebrating 80 glorious years of pioneering educational heritage.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between font-mono text-xs text-neutral-500">
                  <span>Hosting Campus</span>
                  <span className="text-neutral-300 font-semibold">mbccet.ac.in</span>
                </div>
              </div>

            </div>

            {/* Supporting Partner: µLearn MBCCET */}
            <div className="pt-2">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
                <span className="w-2 h-2 bg-red-600 inline-block"></span>
                <span className="text-white font-bold">SUPPORTING PARTNER</span>
                <span className="text-neutral-600">/</span>
                <span>COMMUNITY &amp; PEER ENABLER</span>
              </div>

              <div 
                className="p-6 bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center text-red-400 font-['Anton'] text-2xl shrink-0">
                    µ
                  </div>
                  <div>
                    <div className="font-mono text-xs text-red-400 uppercase font-semibold">
                      Student Developer Community
                    </div>
                    <h4 className="font-['Anton'] text-2xl text-white tracking-wide">
                      µLearn MBCCET
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                      A dynamic student-led peer-to-peer micro-learning initiative under GTech µLearn, nurturing hackathons, open source contributions, and deep tech cohorts.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenRegister}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-semibold border border-neutral-700 flex items-center gap-1.5 shrink-0"
                >
                  <span>Connect with Community</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Poster Feature Spotlight */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-red-600 inline-block"></span>
              <span className="text-white font-bold">OFFICIAL TEASER</span>
            </div>

            <div 
              className="flex-1 bg-neutral-950 border-2 border-red-600 p-6 flex flex-col justify-between relative overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))'
              }}
            >
              <div className="relative mb-4 cursor-pointer group" onClick={onOpenPoster}>
                <div className="overflow-hidden border border-neutral-800 relative aspect-[3/4]">
                  <img
                    src={EVENT_DETAILS.posterImage}
                    alt="HACKRISE '26 Teaser Poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 bg-red-600 text-white font-mono text-xs font-bold uppercase shadow-lg">
                      Click to View Poster
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-red-400 uppercase tracking-wider mb-1 font-bold">
                  "Come With your Moorthy Gang"
                </div>
                <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">
                  Assemble Your Tech Squad
                </h4>
                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                  Inspired by the spirit of brotherhood and collegiate camaraderie, bring your strongest 2–3 member gang to build and compete.
                </p>

                <button
                  onClick={onOpenPoster}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold border border-neutral-700 transition-colors"
                >
                  <ImageIcon className="w-4 h-4 text-red-500" />
                  <span>Inspect High-Res Poster</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
