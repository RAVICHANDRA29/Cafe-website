'use client';

import FadeUp from './FadeUp';
import type { PlaceReview } from '@/lib/types';

interface ReviewsProps {
  reviews?: PlaceReview[];
  googleMapsUri?: string;
}

export default function Reviews({ reviews, googleMapsUri }: ReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  const topReviews = [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section id="reviews" className="py-20 sm:py-28 md:py-32 bg-linen dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-sans text-[11px] text-sage-600 dark:text-sage-400 tracking-[0.3em] uppercase mb-3 block">
              — From Our Guests —
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl italic text-ink dark:text-dark-text mb-5">
              Tales &amp; Testimonials
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-sage-200 dark:bg-dark-border" />
              <span className="text-sage-400 dark:text-sage-500 text-base">✦</span>
              <div className="h-px w-14 bg-sage-200 dark:bg-dark-border" />
            </div>
          </div>
        </FadeUp>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {topReviews.map((review, index) => {
            const text = review.text?.text || review.originalText?.text || '';
            const shortText = text.length > 240 ? text.substring(0, 240).trim() + '…' : text;
            const initial = review.authorAttribution?.displayName?.charAt(0) || '?';

            return (
              <FadeUp key={review.name || index} delay={index * 110}>
                <article className="h-full flex flex-col p-6 sm:p-7 rounded-2xl
                                    bg-cream-50 border border-sage-200/50
                                    dark:bg-dark-card dark:border-dark-border
                                    shadow-soft dark:shadow-dark-soft hover:shadow-soft-lg dark:hover:shadow-dark-soft-lg transition-all duration-300
                                    hover:-translate-y-0.5 relative overflow-hidden">

                  {/* Decorative quote mark */}
                  <span className="absolute top-4 right-5 font-display text-6xl text-sage-200/60 dark:text-sage-700/40
                                   leading-none select-none pointer-events-none" aria-hidden>
                    &ldquo;
                  </span>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i <= review.rating ? 'text-earth-400 dark:text-earth-300' : 'text-sage-200 dark:text-dark-border'}`}
                        fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="font-serif text-sm text-ink/70 dark:text-dark-text/75 leading-relaxed italic flex-1 mb-5">
                    &ldquo;{shortText}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-sage-100 dark:bg-dark-border mb-4" />

                  {/* Author */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {review.authorAttribution?.photoUri ? (
                        <img src={review.authorAttribution.photoUri}
                          alt={`${review.authorAttribution.displayName}'s photo`}
                          className="w-9 h-9 rounded-full object-cover border-2 border-sage-200 dark:border-dark-border shrink-0"
                          loading="lazy" />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-sage-100 border border-sage-200/70
                                        dark:bg-dark-raised dark:border-dark-border
                                        flex items-center justify-center shrink-0">
                          <span className="font-display text-sage-600 dark:text-sage-300 text-sm font-bold italic">{initial}</span>
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-sans text-xs font-semibold text-ink dark:text-dark-text tracking-wide truncate">
                          {review.authorAttribution?.displayName || 'Guest'}
                        </p>
                        <p className="font-sans text-xs text-ink/40 dark:text-dark-muted truncate">
                          {review.relativePublishTimeDescription}
                        </p>
                      </div>
                    </div>

                    {review.authorAttribution?.uri && (
                      <a href={review.authorAttribution.uri} target="_blank" rel="noopener noreferrer"
                        className="text-sage-300 hover:text-sage-500 dark:text-sage-500 dark:hover:text-sage-300 transition-colors shrink-0"
                        aria-label="Read full review on Google">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>

        {/* More reviews link */}
        {googleMapsUri && (
          <FadeUp delay={380}>
            <div className="text-center mt-10 sm:mt-12">
              <a href={googleMapsUri} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase
                           text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-300
                           border-b border-sage-300/60 dark:border-sage-700
                           hover:border-sage-500 dark:hover:border-sage-500 pb-0.5 transition-all duration-200">
                Read More on Google Maps
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
