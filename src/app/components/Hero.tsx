'use client';

import FadeUp from './FadeUp';
import type { PlaceData } from '@/lib/types';

interface HeroProps {
  data: PlaceData;
  heroPhotoUrl?: string;
}

export default function Hero({ data, heroPhotoUrl }: HeroProps) {
  const name = data.displayName?.text || 'Our Café';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background photo */}
      {heroPhotoUrl ? (
        <img
          src={heroPhotoUrl}
          alt={`${name} — atmosphere`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      ) : (
        <div className="absolute inset-0 bg-earth-700" />
      )}

      {/* Warm layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-earth-900/65 via-earth-800/45 to-earth-900/75" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(22,15,8,0.65) 100%)' }} />
      {/* Subtle warm grain */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-3xl mx-auto">

        {/* Location label */}
        <FadeUp>
          <div className="inline-flex items-center gap-3 mb-7 sm:mb-9">
            <div className="h-px w-8 sm:w-12 bg-cream-300/50" />
            <span className="font-sans text-cream-300/75 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
              Established · Hyderabad
            </span>
            <div className="h-px w-8 sm:w-12 bg-cream-300/50" />
          </div>
        </FadeUp>

        {/* Main title */}
        <FadeUp delay={150}>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-cream-50
                         tracking-tight leading-none mb-5 sm:mb-7 drop-shadow-lg italic">
            {name}
          </h1>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={280}>
          <p className="font-serif text-cream-200/80 text-base sm:text-xl italic mb-7 sm:mb-9 tracking-wide leading-relaxed">
            Where every trail begins with a cup
          </p>
        </FadeUp>

        {/* Rating badge */}
        {data.rating && (
          <FadeUp delay={420}>
            <div className="inline-flex items-center gap-3 border border-cream-300/25
                            bg-earth-900/35 backdrop-blur-sm rounded-full px-5 sm:px-7 py-2.5 sm:py-3 mb-9">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i <= Math.round(data.rating!) ? 'text-cream-400' : 'text-cream-300/25'}`}
                    fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="font-sans text-cream-200 text-sm tracking-widest">
                {data.rating.toFixed(1)}
                {data.userRatingCount && (
                  <span className="text-cream-300/65 ml-2">· {data.userRatingCount.toLocaleString()} reviews</span>
                )}
              </span>
            </div>
          </FadeUp>
        )}

        {/* CTA buttons */}
        <FadeUp delay={560}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {data.nationalPhoneNumber && (
              <a
                href={`tel:${data.nationalPhoneNumber.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/92 px-6 py-3
                           text-sm font-semibold text-sage-800 shadow-soft-lg backdrop-blur-sm
                           transition-all duration-200 hover:bg-white hover:shadow-xl
                           focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label={`Call us at ${data.nationalPhoneNumber}`}
              >
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {data.nationalPhoneNumber}
              </a>
            )}
            <a
              href="#gallery"
              onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cream-200/50 px-6 py-3
                         text-sm font-semibold text-cream-100 backdrop-blur-sm
                         transition-all duration-200 hover:bg-cream-100/15 hover:border-cream-200/70
                         focus-visible:ring-2 focus-visible:ring-cream-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Explore
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </FadeUp>

        {/* Scroll indicator */}
        <FadeUp delay={700}>
          <div className="mt-14 sm:mt-16 flex justify-center">
            <button
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 text-cream-300/50 hover:text-cream-200/80
                         transition-colors group cursor-pointer"
              aria-label="Scroll to gallery"
            >
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
