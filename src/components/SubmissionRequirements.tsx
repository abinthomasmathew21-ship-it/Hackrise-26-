import React, { useState } from 'react';
import { SUBMISSION_REQUIREMENTS } from '../data/hackathonData';
import { CheckSquare, Square, Download, Copy, Check, FileCheck, AlertTriangle } from 'lucide-react';

export const SubmissionRequirements: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    team: true,
    problem: true,
  });
  const [copied, setCopied] = useState(false);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = SUBMISSION_REQUIREMENTS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const handleCopyChecklist = () => {
    const text = SUBMISSION_REQUIREMENTS.map(item => {
      const isDone = checkedItems[item.id] ? '[x]' : '[ ]';
      return `${isDone} ${item.name} (${item.format}) - ${item.description}`;
    }).join('\n');

    navigator.clipboard.writeText(`HACKRISE ’26 Project Submission Checklist:\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              <span className="w-2.5 h-0.5 bg-red-600"></span>
              <span>DEVPOST DELIVERABLES</span>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500 font-normal">MANDATORY AUDIT</span>
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
              SUBMISSION <span className="text-red-600">REQUIREMENTS</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyChecklist}
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-mono font-bold border border-neutral-300 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-500" />}
              <span>{copied ? 'Checklist Copied!' : 'Copy Submission Checklist'}</span>
            </button>
          </div>
        </div>

        {/* Progress Bar & Status */}
        <div className="bg-white border-2 border-neutral-900 p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase">
                Interactive Pre-Flight Readiness
              </div>
              <div className="font-['Space_Grotesk'] text-lg font-bold text-neutral-900">
                {completedCount} of {totalCount} Requirements Marked Ready ({progressPercent}%)
              </div>
            </div>
          </div>

          <div className="w-full md:w-64">
            <div className="w-full h-2.5 bg-neutral-200 overflow-hidden">
              <div
                className="h-full bg-red-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Requirements Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUBMISSION_REQUIREMENTS.map((item, index) => {
            const isChecked = !!checkedItems[item.id];

            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-5 border cursor-pointer select-none transition-all duration-150 flex items-start gap-4 ${
                  isChecked
                    ? 'bg-white border-neutral-900 shadow-sm'
                    : 'bg-white/60 border-neutral-200 hover:border-neutral-400'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
              >
                {/* Custom Checkbox Icon */}
                <div className="pt-0.5 shrink-0 text-red-600">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 fill-red-50 text-red-600" />
                  ) : (
                    <Square className="w-5 h-5 text-neutral-400" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className={`font-['Space_Grotesk'] text-base font-bold ${
                      isChecked ? 'text-neutral-900' : 'text-neutral-600'
                    }`}>
                      {item.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 border border-neutral-200 shrink-0">
                      {item.format}
                    </span>
                  </div>

                  <p className="text-neutral-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning Callout */}
        <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-600 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed font-sans">
            <strong>Devpost Deadline Warning:</strong> Project pages on Devpost cannot be edited after <strong>07:00 PM on 26 January 2027</strong>. Please verify your public GitHub repository permissions and host link accessibility before the final buzzer.
          </p>
        </div>

      </div>
    </section>
  );
};
