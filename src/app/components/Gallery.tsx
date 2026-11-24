'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';
import type { PlacePhoto } from '@/lib/types';

interface GalleryProps {
  photos: PlacePhoto[];
  photoUrls: string[];
  cafeName: string;
}

export default function Gallery({ photos, photoUrls, cafeName }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryPhotos     = photoUrls.slice(1, 7);
  const galleryPhotosMeta = photos.slice(1, 7);

  if (!galleryPhotos.length) return null;

  return (
    <section id="gallery" className="py-20 sm:py-28 md:py-32 bg-linen dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <FadeUp>
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-sans text-[11px] text-sage-600 dark:text-sage-400 tracking-[0.3em] uppercase mb-3 block">
              — Visual Journal —
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl italic text-ink dark:text-dark-text mb-5">
              A Glimpse Inside
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-sage-200 dark:bg-dark-border" />
              <span className="text-sage-400 dark:text-sage-500 text-base">✦</span>
              <div className="h-px w-14 bg-sage-200 dark:bg-dark-border" />
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5">
          {galleryPhotos.map((url, index) => {
            const attribution = galleryPhotosMeta[index]?.authorAttributions?.[0];
            const alt = attribution
              ? `Photo of ${cafeName} by ${attribution.displayName}`
              : `Photo of ${cafeName}`;
            const isTall = index === 0 || index === 4;

            return (
              <FadeUp key={index} delay={index * 70}>
                <button
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative w-full overflow-hidden rounded-xl cursor-pointer
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2
                              dark:focus-visible:ring-offset-dark-surface
                              shadow-soft dark:shadow-dark-soft hover:shadow-soft-lg dark:hover:shadow-dark-soft-lg
                              transition-shadow duration-300
                              ${isTall ? 'row-span-2' : ''}`}
                  style={{ aspectRatio: isTall ? '3/4' : '4/3' }}
                  aria-label={`View ${alt} full size`}
                >
                  <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-cream-50/50
                                  transition-all duration-500 z-10 rounded-xl pointer-events-none" />
                  <img
                    src={url}
                    alt={alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700
                               group-hover:scale-105 motion-reduce:group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/55 via-transparent to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 rounded-xl" />
                  {attribution && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-20
                                    translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                      <p className="font-sans text-cream-100 text-xs tracking-wide truncate">
                        📷 {attribution.displayName}
                      </p>
                    </div>
                  )}
                </button>
              </FadeUp>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-earth-900/97 dark:bg-dark-bg/98 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-cream-300 hover:text-cream-50 transition-colors z-10
                       w-10 h-10 flex items-center justify-center rounded-full bg-earth-800/60 hover:bg-earth-700/80
                       dark:bg-dark-raised/80 dark:hover:bg-dark-raised"
            aria-label="Close lightbox">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          {lightboxIndex > 0 && (
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              className="absolute left-3 sm:left-5 text-cream-300 hover:text-cream-50 transition-colors
                         w-10 h-10 flex items-center justify-center rounded-full
                         bg-earth-800/60 hover:bg-earth-700/80 dark:bg-dark-raised/80 dark:hover:bg-dark-raised"
              aria-label="Previous photo">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
          )}
          {lightboxIndex < galleryPhotos.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              className="absolute right-3 sm:right-5 text-cream-300 hover:text-cream-50 transition-colors
                         w-10 h-10 flex items-center justify-center rounded-full
                         bg-earth-800/60 hover:bg-earth-700/80 dark:bg-dark-raised/80 dark:hover:bg-dark-raised"
              aria-label="Next photo">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          )}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {galleryPhotos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === lightboxIndex ? 'bg-cream-200 w-4' : 'bg-cream-500/50 w-1.5'
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
          <img
            src={galleryPhotos[lightboxIndex]}
            alt={`Full size photo ${lightboxIndex + 1} of ${cafeName}`}
            className="max-w-full max-h-[88vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
