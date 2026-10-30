import React, { useState } from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { X, ExternalLink, Calendar, Copy, Check, Users, Sparkles, AlertCircle } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.devpostUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadICS = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//HACKRISE 26//Hackathon Schedule//EN',
      'BEGIN:VEVENT',
      'UID:hackrise26-event-2027@mbccet.org',
      'DTSTAMP:20261030T000000Z',
      'DTSTART:20270126T023000Z', // 08:00 AM IST
      'DTEND:20270126T143000Z',   // 08:00 PM IST
      'SUMMARY:HACKRISE ’26 — 12-Hour Inter-College Hackathon',
      'DESCRIPTION:Where Ideas Rise, Innovation Begins. 12-Hour Inter-College Hackathon associated with Orbinex Innovations & MBC : 80, supporting partner µLearn MBCCET.\\nDevpost: ' + EVENT_DETAILS.devpostUrl,
      'LOCATION:Mar Baselios Christian College of Engineering & Technology (MBCCET)',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'HACKRISE-26-Calendar-Reminder.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white border-2 border-neutral-900 shadow-2xl p-6 sm:p-8"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
        }}
      >
        {/* Top red bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
              Official Registration
            </span>
            <span className="text-neutral-300">/</span>
            <span className="font-mono text-xs text-neutral-500">Devpost Hosted</span>
          </div>
          <h2 className="font-['Anton'] text-3xl sm:text-4xl text-neutral-900 tracking-wide">
            REGISTER FOR HACKRISE ’26
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            Where Ideas Rise, Innovation Begins. 26 January 2027 · 12-Hour Sprint
          </p>
        </div>

        {/* Devpost announcement banner */}
        <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-neutral-900 text-sm">
                Devpost Is the Official Registration Platform
              </h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Registrations and project submissions are officially managed through Devpost. You can register individually and link your 2–3 member squad anytime before hacking begins.
              </p>
            </div>
          </div>
        </div>

        {/* Key rules reminder */}
        <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
          <div className="p-3 bg-neutral-50 border border-neutral-200">
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Team Size</span>
            <span className="text-neutral-900 font-bold text-sm">2–3 Members</span>
            <span className="text-neutral-500 block text-[11px] mt-0.5">Cross-college allowed</span>
          </div>
          <div className="p-3 bg-neutral-50 border border-neutral-200">
            <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Hackathon Date</span>
            <span className="text-red-600 font-bold text-sm">26 Jan 2027</span>
            <span className="text-neutral-500 block text-[11px] mt-0.5">12 Hours nonstop</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <a
            href={EVENT_DETAILS.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-['Space_Grotesk'] font-bold text-base tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
            }}
          >
            <span>Proceed to Devpost Registration</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold font-mono border border-neutral-300 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Copied Link!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-600" />
                  <span>Copy Devpost URL</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadICS}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold font-mono border border-neutral-300 transition-colors"
            >
              <Calendar className="w-4 h-4 text-red-600" />
              <span>Add to Calendar (.ics)</span>
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span>Orbinex Innovations · MBC : 80</span>
          <span>µLearn MBCCET</span>
        </div>
      </div>
    </div>
  );
};
