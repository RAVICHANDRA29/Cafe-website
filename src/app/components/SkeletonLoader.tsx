'use client';

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-cream dark:bg-dark-bg animate-pulse" aria-busy="true" aria-label="Loading">
      {/* Hero skeleton */}
      <div className="relative h-screen bg-earth-100/60 dark:bg-dark-surface">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6">
          <div className="h-2.5 w-28 bg-sage-200/60 dark:bg-dark-raised rounded-full" />
          <div className="h-14 w-72 sm:w-96 bg-sage-200/50 dark:bg-dark-raised rounded-xl" />
          <div className="h-5 w-52 bg-sage-200/35 dark:bg-dark-raised rounded-lg" />
          <div className="h-10 w-44 bg-sage-200/25 dark:bg-dark-raised rounded-full" />
        </div>
      </div>
      {/* Gallery skeleton */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="h-7 w-44 bg-sage-200/40 dark:bg-dark-raised rounded-lg mb-12 mx-auto" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-sage-100/60 dark:bg-dark-raised rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
