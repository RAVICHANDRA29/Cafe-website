'use client';

import type { PlaceData } from '@/lib/types';

export default function Footer({ data }: { data: PlaceData }) {
  const name = data.displayName?.text || 'Café';

  return (
    <footer className="border-t border-sage-200/50 py-10 sm:py-12 bg-linen dark:border-dark-border dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-9">
          <div className="h-px flex-1 max-w-20 bg-sage-200/60 dark:bg-dark-border" />
          <span className="font-display text-sage-300/60 dark:text-sage-600 text-2xl italic" aria-hidden>✦</span>
          <div className="h-px flex-1 max-w-20 bg-sage-200/60 dark:bg-dark-border" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">

          {/* Name & address */}
          <div>
            <p className="font-display text-lg italic text-ink dark:text-dark-text mb-1">{name}</p>
            {data.formattedAddress && (
              <p className="font-sans text-xs text-ink/40 dark:text-dark-muted tracking-wide max-w-xs leading-relaxed">
                {data.formattedAddress}
              </p>
            )}
            {/* Phone in footer */}
            {data.nationalPhoneNumber && (
              <a
                href={`tel:${data.nationalPhoneNumber.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-1.5 mt-2 font-sans text-xs text-sage-600
                           dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300 transition-colors"
                aria-label={`Call us at ${data.nationalPhoneNumber}`}
              >
                <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                {data.nationalPhoneNumber}
              </a>
            )}
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            {/* Google credit */}
            <div className="flex items-center gap-2 text-ink/30 dark:text-dark-muted">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span className="font-sans text-xs tracking-wide">Data from Google Maps</span>
            </div>
            <p className="font-sans text-[11px] text-ink/25 dark:text-dark-muted tracking-wide">
              © {new Date().getFullYear()} {name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
