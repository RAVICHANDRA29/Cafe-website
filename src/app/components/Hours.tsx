'use client';

import FadeUp from './FadeUp';
import type { RegularOpeningHours } from '@/lib/types';

export default function Hours({ hours }: { hours?: RegularOpeningHours }) {
  if (!hours) return null;

  const today = new Date().getDay(); // 0 = Sunday
  const googleDayToJs = [1, 2, 3, 4, 5, 6, 0]; // Google: 0=Mon…6=Sun

  return (
    <section id="hours" className="py-20 sm:py-28 md:py-32 relative overflow-hidden bg-cream dark:bg-dark-bg">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grain opacity-30" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 sm:mb-14">
            <span className="font-sans text-[11px] text-sage-600 dark:text-sage-400 tracking-[0.3em] uppercase mb-3 block">
              — When to Visit —
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl italic text-ink dark:text-dark-text mb-7">
              Opening Hours
            </h2>

            {/* Open / Closed badge */}
            <div className={`inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full text-sm font-sans tracking-widest uppercase
              border ${hours.openNow
                ? 'border-sage-300/60 text-sage-700 bg-sage-50 dark:border-sage-700/60 dark:text-sage-300 dark:bg-sage-900/30'
                : 'border-earth-300/60 text-earth-600 bg-earth-50 dark:border-earth-700/60 dark:text-earth-300 dark:bg-earth-900/30'}`}
            >
              <span className={`w-2 h-2 rounded-full ${hours.openNow ? 'bg-sage-500 animate-pulse' : 'bg-earth-400'}`} />
              {hours.openNow ? 'Open Now' : 'Closed'}
            </div>
          </div>
        </FadeUp>

        {/* Hours table */}
        <FadeUp delay={150}>
          <div className="border border-sage-200/70 rounded-2xl overflow-hidden
                          bg-cream-50 shadow-soft dark:border-dark-border dark:bg-dark-card dark:shadow-dark-soft">
            {hours.weekdayDescriptions.map((desc, index) => {
              const isToday = googleDayToJs[index] === today;
              const colonIdx = desc.indexOf(':');
              const dayName  = desc.substring(0, colonIdx).trim();
              const timeRange = desc.substring(colonIdx + 1).trim();

              return (
                <div
                  key={index}
                  className={`flex justify-between items-center px-5 sm:px-7 py-4 transition-colors
                    ${index < hours.weekdayDescriptions.length - 1 ? 'border-b border-sage-100 dark:border-dark-border' : ''}
                    ${isToday ? 'bg-sage-50/70 dark:bg-sage-900/30' : 'hover:bg-cream-100/50 dark:hover:bg-dark-raised/60'}`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span className="font-sans text-[10px] tracking-widest uppercase text-sage-600
                                       border border-sage-300/60 px-2 py-0.5 rounded-full bg-sage-50
                                       dark:border-sage-700/60 dark:bg-sage-900/40 dark:text-sage-300">
                        Today
                      </span>
                    )}
                    <span className={`font-sans text-sm tracking-wide ${
                      isToday ? 'font-semibold text-ink dark:text-dark-text' : 'text-ink/60 dark:text-dark-muted'
                    }`}>
                      {dayName}
                    </span>
                  </div>
                  <span className={`font-mono text-sm ${
                    isToday ? 'text-ink dark:text-dark-text font-bold' : 'text-ink/50 dark:text-dark-muted'
                  }`}>
                    {timeRange}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* Footer note */}
        <FadeUp delay={300}>
          <p className="text-center font-sans text-xs text-ink/40 dark:text-dark-muted tracking-wide mt-5">
            Hours may vary on public holidays
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
