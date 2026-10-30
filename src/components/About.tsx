import React from 'react';
import { Lightbulb, Cpu, Users, Target, Palette, Trophy, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenRegister: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenRegister }) => {
  const pillars = [
    {
      title: "Innovation",
      desc: "Reimagining conventional methods by leveraging disruptive algorithms, novel workflows, and original technical paradigms.",
      icon: Lightbulb,
      badge: "01",
    },
    {
      title: "Technology",
      desc: "Engineering with production-grade stacks: AI, resilient cloud microservices, reactive frontend architectures, and secure backends.",
      icon: Cpu,
      badge: "02",
    },
    {
      title: "Collaboration",
      desc: "Fusing complementary engineering strengths across colleges. Pair coding, agile code reviews, and shared ownership under time pressure.",
      icon: Users,
      badge: "03",
    },
    {
      title: "Problem Solving",
      desc: "Directing computational firepower toward genuine friction points in healthcare, civic tech, cybersecurity, education, and enterprise.",
      icon: Target,
      badge: "04",
    },
    {
      title: "Creativity",
      desc: "Crafting delightful, ergonomic user journeys and creative interface models that turn complex tech into accessible human tools.",
      icon: Palette,
      badge: "05",
    },
    {
      title: "Competition",
      desc: "Testing your squad's limits in a competitive arena with high-energy peer teams, rigorous rubric evaluation, and industry judges.",
      icon: Trophy,
      badge: "06",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              <span className="w-2.5 h-0.5 bg-red-600"></span>
              <span>ABOUT THE HACKATHON</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 font-normal">MISSION &amp; VALUES</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              WHERE IDEAS RISE, <br />
              <span className="text-red-600">INNOVATION BEGINS.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              HackRise ’26 is an inter-college 12-hour hackathon where students come together to transform ideas into practical technology solutions.
            </p>
          </div>
        </div>

        {/* Narrative Feature Card */}
        <div className="mb-16 bg-neutral-50 border-2 border-neutral-900 p-6 sm:p-10 relative">
          <div className="absolute top-0 left-0 w-16 h-1 bg-red-600" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                12 Hours of Rapid Engineering, Zero Fluff
              </h3>
              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
                Participants will collaborate, innovate, develop prototypes, solve real-world problems and compete with teams from different colleges. Whether you're a seasoned developer, an ambitious fresher, or a UX architect, HACKRISE ’26 provides the crucible to turn ambitious ideas into functional reality.
              </p>
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm font-mono text-neutral-600">
                <span className="flex items-center gap-1.5 text-neutral-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Inter-College Cross Teaming
                </span>
                <span className="flex items-center gap-1.5 text-neutral-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Industry Mentors from Orbinex
                </span>
                <span className="flex items-center gap-1.5 text-neutral-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Direct Devpost Submissions
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white border border-neutral-300 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Event Format
                </span>
                <div className="font-['Anton'] text-3xl text-neutral-950 mb-1">
                  12-HOUR SPRINT
                </div>
                <div className="text-xs text-neutral-600 mb-4">
                  Opening at 08:00 AM · Final Demos at 07:30 PM
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-neutral-900 hover:bg-red-600 text-white font-mono text-xs font-bold uppercase transition-colors"
              >
                <span>Join the Arena</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-6 sm:p-7 bg-white border border-neutral-300 hover:border-red-600 transition-all duration-200 relative flex flex-col justify-between"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}
              >
                {/* Top Corner Red Line on hover */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none border-t-2 border-r-2 border-transparent group-hover:border-red-600 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center border border-red-200 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-red-600 transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="font-['Space_Grotesk'] text-xl font-bold text-neutral-900 mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  <span>HACKRISE PILLAR</span>
                  <span>/</span>
                  <span className="text-red-600 font-semibold">CORE FOCUS</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
