import React from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';
import { X, Download, Share2, Sparkles, ExternalLink } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border-2 border-red-600 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
        }}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-neutral-800 text-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
            <span className="font-['Anton'] text-lg tracking-wider">HACKRISE ’26 OFFICIAL POSTER</span>
            <span className="font-mono text-xs text-neutral-400 hidden sm:inline">/ "Come With your Moorthy Gang"</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close poster view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Poster Image Container */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-neutral-950/80">
          <div className="relative max-w-md w-full border border-neutral-800 shadow-2xl">
            <img
              src={EVENT_DETAILS.posterImage}
              alt="HACKRISE '26 Official Teaser Poster - Come With your Moorthy Gang"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Bottom Bar with actions and partner credentials */}
        <div className="px-5 py-3.5 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-neutral-400">
            <span>Associated with </span>
            <strong className="text-white">Orbinex Innovations</strong> &amp; <strong className="text-white">MBC : 80</strong>
            <span className="text-neutral-500"> · </span>
            <span>Partner: </span>
            <strong className="text-red-400">µLearn MBCCET</strong>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={EVENT_DETAILS.posterImage}
              download="HACKRISE-26-Official-Poster.jpg"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono border border-neutral-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <a
              href={EVENT_DETAILS.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold transition-colors"
            >
              <span>Register on Devpost</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
