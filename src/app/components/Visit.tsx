'use client';

import FadeUp from './FadeUp';
import type { PlaceData } from '@/lib/types';

export default function Visit({ data }: { data: PlaceData }) {
  const { formattedAddress, nationalPhoneNumber, googleMapsUri, location, websiteUri } = data;
  const cafeName = data.displayName?.text || 'Café';

  const osmUrl = location
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.005}%2C${location.latitude - 0.003}%2C${location.longitude + 0.005}%2C${location.latitude + 0.003}&layer=mapnik&marker=${location.latitude}%2C${location.longitude}`
    : null;

  return (
    <section id="visit" className="py-20 sm:py-28 md:py-32 relative overflow-hidden bg-cream dark:bg-dark-bg">
      <div className="absolute inset-0 bg-grain opacity-20" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-sans text-[11px] text-sage-600 dark:text-sage-400 tracking-[0.3em] uppercase mb-3 block">
              — Come Find Us —
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl italic text-ink dark:text-dark-text mb-5">
              Visit the Camp
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-sage-200 dark:bg-dark-border" />
              <span className="text-sage-400 dark:text-sage-500 text-base">✦</span>
              <div className="h-px w-14 bg-sage-200 dark:bg-dark-border" />
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Info panel */}
          <FadeUp delay={100}>
            <div className="space-y-6 p-7 sm:p-9 border border-sage-200/60
                            bg-cream-50 rounded-2xl shadow-soft
                            dark:border-dark-border dark:bg-dark-card dark:shadow-dark-soft">

              {formattedAddress && (
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-sage-200
                                  bg-sage-50 flex items-center justify-center dark:border-dark-border dark:bg-dark-raised">
                    <svg className="w-4 h-4 text-sage-600 dark:text-sage-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-ink/40 dark:text-dark-muted mb-1.5">Address</p>
                    <p className="font-serif text-sm text-ink dark:text-dark-text leading-relaxed">{formattedAddress}</p>
                  </div>
                </div>
              )}

              {nationalPhoneNumber && (
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-sage-200
                                  bg-sage-50 flex items-center justify-center dark:border-dark-border dark:bg-dark-raised">
                    <svg className="w-4 h-4 text-sage-600 dark:text-sage-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-ink/40 dark:text-dark-muted mb-1.5">Telephone</p>
                    <a href={`tel:${nationalPhoneNumber.replace(/\s/g, '')}`}
                      className="font-mono text-sm text-ink dark:text-dark-text hover:text-sage-700 dark:hover:text-sage-300 transition-colors font-medium">
                      {nationalPhoneNumber}
                    </a>
                  </div>
                </div>
              )}

              {websiteUri && (
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-sage-200
                                  bg-sage-50 flex items-center justify-center dark:border-dark-border dark:bg-dark-raised">
                    <svg className="w-4 h-4 text-sage-600 dark:text-sage-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-ink/40 dark:text-dark-muted mb-1.5">Website</p>
                    <a href={websiteUri} target="_blank" rel="noopener noreferrer"
                      className="font-serif text-sm text-ink dark:text-dark-text hover:text-sage-700 dark:hover:text-sage-300 transition-colors underline underline-offset-2 decoration-sage-300/60">
                      {new URL(websiteUri).hostname.replace('www.', '')}
                    </a>
                  </div>
                </div>
              )}

              {/* Directions CTA */}
              {googleMapsUri && (
                <div className="pt-3">
                  <a href={googleMapsUri} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                               bg-sage-700 text-white font-sans text-xs tracking-[0.15em] uppercase font-semibold
                               hover:bg-sage-600 hover:shadow-md transition-all duration-200
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                    Get Directions
                  </a>
                </div>
              )}
            </div>
          </FadeUp>

          {/* Map */}
          <FadeUp delay={200}>
            <div className="relative rounded-2xl overflow-hidden border border-sage-200/70 shadow-soft-lg dark:border-dark-border dark:shadow-dark-soft-lg">
              {/* Map header bar */}
              <div className="bg-cream-200/60 px-4 py-2.5 flex items-center gap-2 border-b border-sage-200/50 dark:border-dark-border dark:bg-dark-raised">
                <div className="w-2.5 h-2.5 rounded-full bg-earth-300/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-earth-200/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-sage-300/70" />
                <span className="font-mono text-xs text-ink/35 dark:text-dark-muted ml-2 truncate">{formattedAddress}</span>
              </div>
              {osmUrl ? (
                <iframe
                  src={osmUrl}
                  className="w-full h-72 sm:h-80 md:h-96 border-0 sepia-[0.2] dark:invert dark:hue-rotate-180 dark:brightness-90"
                  loading="lazy"
                  title={`Map — ${cafeName}`}
                  aria-label={`Map showing location of ${cafeName}`}
                />
              ) : (
                <div className="w-full h-72 md:h-96 bg-cream-200 dark:bg-dark-card flex items-center justify-center">
                  <p className="font-sans text-xs text-ink/40 dark:text-dark-muted tracking-widest uppercase">Map unavailable</p>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
