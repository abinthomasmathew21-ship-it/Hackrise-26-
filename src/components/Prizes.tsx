import React, { useState } from 'react';
import { DEFAULT_PRIZES, PrizeItem } from '../data/hackathonData';
import { Trophy, Medal, Sparkles, Check, Edit2, RotateCcw, Flame } from 'lucide-react';

interface PrizesProps {
  onOpenRegister: () => void;
}

export const Prizes: React.FC<PrizesProps> = ({ onOpenRegister }) => {
  const [prizes, setPrizes] = useState<PrizeItem[]>(DEFAULT_PRIZES);
  const [isEditing, setIsEditing] = useState(false);

  const handleAmountChange = (id: string, newAmount: string) => {
    setPrizes(prev =>
      prev.map(p => (p.id === id ? { ...p, defaultAmount: newAmount } : p))
    );
  };

  const resetPrizes = () => {
    setPrizes(DEFAULT_PRIZES);
    setIsEditing(false);
  };

  return (
    <section id="prizes" className="py-20 sm:py-28 bg-white border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              <span className="w-2.5 h-0.5 bg-red-600"></span>
              <span>AWARDS &amp; HONORS</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 font-normal">RECOGNITION POOL</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              PRIZES &amp; <span className="text-red-600">RECOGNITION</span>
            </h2>
          </div>

          {/* Organizer Editable Amount Feature */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-neutral-700 hover:text-neutral-900 border border-neutral-300 bg-neutral-50 transition-colors"
              title="Edit prize pool amounts"
            >
              <Edit2 className="w-3.5 h-3.5 text-red-600" />
              <span>{isEditing ? 'Done Editing' : 'Customize Prize Values'}</span>
            </button>
            {isEditing && (
              <button
                onClick={resetPrizes}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 border border-neutral-200"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Prize Cards Grid: WINNERS, RUNNERS-UP, SPECIAL RECOGNITIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => {
            const isWinner = prize.id === 'winners';
            const isRunnerUp = prize.id === 'runners-up';

            return (
              <div
                key={prize.id}
                className={`flex flex-col justify-between border-2 transition-all relative ${
                  isWinner
                    ? 'bg-neutral-950 text-white border-red-600 shadow-2xl lg:-translate-y-4'
                    : isRunnerUp
                    ? 'bg-white text-neutral-900 border-neutral-900 shadow-md'
                    : 'bg-neutral-50 text-neutral-900 border-neutral-300'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))'
                }}
              >
                {/* Top Badge Stamp */}
                <div className={`py-2 px-6 border-b flex items-center justify-between text-xs font-mono ${
                  isWinner
                    ? 'bg-red-600 text-white border-red-700 font-bold'
                    : 'bg-neutral-100 text-neutral-700 border-neutral-200 font-semibold'
                }`}>
                  <span className="uppercase tracking-widest">{prize.tier}</span>
                  <span className="uppercase">{prize.badge}</span>
                </div>

                {/* Card Main Info */}
                <div className="p-6 sm:p-8 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 flex items-center justify-center ${
                      isWinner
                        ? 'bg-red-600 text-white'
                        : isRunnerUp
                        ? 'bg-neutral-900 text-white'
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {isWinner ? (
                        <Trophy className="w-8 h-8" />
                      ) : isRunnerUp ? (
                        <Medal className="w-8 h-8" />
                      ) : (
                        <Sparkles className="w-8 h-8" />
                      )}
                    </div>

                    <span className={`font-['Anton'] text-2xl ${
                      isWinner ? 'text-red-500' : 'text-neutral-400'
                    }`}>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className={`font-['Anton'] text-3xl sm:text-4xl tracking-wide mb-3 ${
                    isWinner ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {prize.title}
                  </h3>

                  {/* Prize Amount (Editable or Display) */}
                  <div className="mb-6">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                      isWinner ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      Prize Value / Pool Allocation
                    </span>

                    {isEditing ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={prize.defaultAmount}
                          onChange={(e) => handleAmountChange(prize.id, e.target.value)}
                          className={`w-full px-3 py-1.5 text-base font-bold font-mono border ${
                            isWinner
                              ? 'bg-neutral-900 border-red-500 text-white'
                              : 'bg-white border-neutral-400 text-neutral-900'
                          }`}
                          placeholder="e.g. ₹25,000 or To Be Announced"
                        />
                      </div>
                    ) : (
                      <div className={`font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight ${
                        isWinner ? 'text-red-500' : 'text-neutral-900'
                      }`}>
                        {prize.defaultAmount}
                      </div>
                    )}
                  </div>

                  {/* Perks List */}
                  <div className={`pt-6 border-t ${
                    isWinner ? 'border-neutral-800' : 'border-neutral-200'
                  }`}>
                    <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block mb-3 ${
                      isWinner ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      Included Honors &amp; Perks:
                    </span>
                    <ul className="space-y-2.5">
                      {prize.perks.map((perk, i) => (
                        <li key={i} className="text-xs sm:text-sm flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isWinner ? 'text-red-500' : 'text-red-600'
                          }`} />
                          <span className={isWinner ? 'text-neutral-300' : 'text-neutral-700'}>
                            {perk}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className={`p-6 border-t ${
                  isWinner ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
                }`}>
                  <button
                    onClick={onOpenRegister}
                    className={`w-full py-3 px-4 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-colors ${
                      isWinner
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    Aim for {prize.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate of Participation Notice */}
        <div className="mt-14 p-6 bg-red-50 border-l-4 border-red-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-['Anton'] text-lg shrink-0">
              ✓
            </div>
            <div>
              <h4 className="font-['Space_Grotesk'] font-bold text-neutral-900 text-base">
                Official Certificate of Participation for Every Valid Team
              </h4>
              <p className="text-neutral-600 text-xs sm:text-sm mt-0.5">
                All registered participants who submit a functional MVP and present before the judges receive accredited HACKRISE ’26 digital and verifiable certificates.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenRegister}
            className="shrink-0 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase font-bold transition-colors"
          >
            Register on Devpost
          </button>
        </div>

      </div>
    </section>
  );
};
