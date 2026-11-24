'use client';

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-cream dark:bg-dark-bg flex items-center justify-center px-5 sm:px-8">
      <div className="max-w-md text-center p-8 sm:p-10 border border-sage-200/60 rounded-2xl shadow-soft
                      bg-cream-50 dark:border-dark-border dark:bg-dark-card dark:shadow-dark-soft">
        <div className="font-display text-5xl text-sage-300/60 mb-5 italic" aria-hidden>!</div>
        <h2 className="font-display text-2xl italic text-ink dark:text-dark-text mb-3">
          Couldn&apos;t reach the camp
        </h2>
        <p className="font-serif text-sm text-ink/50 dark:text-dark-muted leading-relaxed mb-8">
          {message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                     bg-sage-700 text-white font-sans text-xs tracking-[0.15em] uppercase
                     hover:bg-sage-600 transition-colors shadow-soft"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
