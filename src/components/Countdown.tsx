import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/hackathonData';

interface CountdownProps {
  theme?: 'dark' | 'light' | 'red';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

export const Countdown: React.FC<CountdownProps> = ({
  theme = 'dark',
  size = 'lg',
  showLabel = true,
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    // 26 January 2027 08:00:00 IST (+05:30)
    const targetDate = new Date(EVENT_DETAILS.targetDateISO).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, totalMs: difference };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const units = [
    { label: 'DAYS', value: formatNumber(timeLeft.days) },
    { label: 'HOURS', value: formatNumber(timeLeft.hours) },
    { label: 'MINUTES', value: formatNumber(timeLeft.minutes) },
    { label: 'SECONDS', value: formatNumber(timeLeft.seconds) },
  ];

  // Visual variants
  const getBoxStyles = () => {
    if (theme === 'red') {
      return 'bg-white text-red-600 border border-red-200 shadow-md';
    }
    if (theme === 'light') {
      return 'bg-neutral-900 text-white border border-neutral-800';
    }
    // dark theme (with red accents)
    return 'bg-neutral-950 text-white border border-neutral-800 shadow-lg';
  };

  const getNumberSize = () => {
    if (size === 'sm') return 'text-xl sm:text-2xl';
    if (size === 'md') return 'text-2xl sm:text-4xl';
    return 'text-3xl sm:text-5xl md:text-6xl';
  };

  const getBoxPadding = () => {
    if (size === 'sm') return 'px-2.5 py-1.5 min-w-[58px]';
    if (size === 'md') return 'px-4 py-2.5 min-w-[74px]';
    return 'px-4 sm:px-6 py-3 sm:py-5 min-w-[76px] sm:min-w-[110px]';
  };

  return (
    <div className="w-full flex flex-col items-center">
      {showLabel && (
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${theme === 'red' ? 'text-red-100' : 'text-neutral-500'}`}>
            Live Countdown to HackRise ’26
          </span>
          <span className={`text-xs font-mono font-medium ${theme === 'red' ? 'text-red-200' : 'text-neutral-400'}`}>
            / 26 JAN 2027
          </span>
        </div>
      )}

      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5 w-full max-w-2xl">
        {units.map((unit, index) => (
          <div
            key={unit.label}
            className={`flex flex-col items-center justify-center rounded-none relative transition-all duration-200 ${getBoxStyles()} ${getBoxPadding()}`}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
            }}
          >
            {/* Top red notch marker */}
            <div className={`absolute top-0 left-0 w-3 h-0.5 ${theme === 'red' ? 'bg-red-600' : 'bg-red-500'}`} />
            <div className={`absolute bottom-0 right-0 w-3 h-0.5 ${theme === 'red' ? 'bg-red-600' : 'bg-red-500'}`} />

            {/* Digit */}
            <span className={`font-['Anton'] tracking-wider leading-none select-none ${getNumberSize()}`}>
              {unit.value}
            </span>

            {/* Separator line */}
            <div className={`w-full my-1.5 h-px ${theme === 'red' ? 'bg-red-100' : 'bg-neutral-800'}`} />

            {/* Label */}
            <span
              className={`font-mono text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase ${
                theme === 'red' ? 'text-red-700' : 'text-neutral-400'
              }`}
            >
              {unit.label}
            </span>

            {/* Index position stamp */}
            <span
              className={`absolute top-1 right-2 font-mono text-[8px] opacity-35 select-none ${
                theme === 'red' ? 'text-neutral-500' : 'text-neutral-500'
              }`}
            >
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
