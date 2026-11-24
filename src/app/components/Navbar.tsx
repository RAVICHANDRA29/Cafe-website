'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { label: 'Story',   href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Hours',   href: '#hours' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Find Us', href: '#visit' },
];

export default function Navbar({
  cafeName,
  phoneNumber,
}: {
  cafeName?: string;
  phoneNumber?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle }       = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/96 dark:bg-dark-bg/96 backdrop-blur-md shadow-soft dark:shadow-dark-soft border-b border-sage-200/60 dark:border-dark-border'
          : 'bg-cream-100/80 dark:bg-dark-bg/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-4">

        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => goto(e, '#hero')}
          className="font-display text-lg sm:text-xl font-bold tracking-wide text-ink dark:text-dark-text italic shrink-0 hover:text-sage-700 dark:hover:text-sage-300 transition-colors"
        >
          {cafeName || 'Café'}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => goto(e, l.href)}
              className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase
                         text-ink/55 dark:text-dark-muted
                         hover:text-sage-700 dark:hover:text-sage-300
                         transition-colors duration-200 relative
                         after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px
                         after:bg-sage-500 dark:after:bg-sage-400
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}

          {phoneNumber && (
            <a
              href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full
                         bg-sage-700 dark:bg-sage-600 px-4 py-2
                         font-sans text-[11px] font-semibold tracking-wide text-white
                         transition-all duration-200 hover:bg-sage-600 dark:hover:bg-sage-500 hover:shadow-md"
              aria-label={`Call us at ${phoneNumber}`}
            >
              <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>{phoneNumber}</span>
            </a>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="w-8 h-8 flex items-center justify-center rounded-full
                       border border-sage-200 dark:border-dark-border
                       text-ink/40 dark:text-dark-muted
                       hover:border-sage-400 dark:hover:border-sage-500
                       hover:text-sage-600 dark:hover:text-sage-300
                       transition-all duration-200"
          >
            {theme === 'light'
              ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              : <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            }
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          {phoneNumber && (
            <a href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} aria-label="Call us"
              className="p-2 text-sage-700 dark:text-sage-400 hover:text-sage-600 dark:hover:text-sage-300 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
          )}
          <button onClick={toggle} aria-label="Toggle theme"
            className="p-1.5 text-ink/40 dark:text-dark-muted hover:text-sage-600 dark:hover:text-sage-300 transition-colors">
            {theme === 'light'
              ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            }
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="p-2 text-ink dark:text-dark-text hover:text-sage-700 dark:hover:text-sage-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-sage-200/60 dark:border-dark-border bg-cream-100/98 dark:bg-dark-bg/98 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-5 py-7 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => goto(e, l.href)}
                className="font-sans text-xs font-semibold tracking-[0.2em] uppercase
                           text-ink/60 dark:text-dark-muted hover:text-sage-700 dark:hover:text-sage-300 transition-colors">
                {l.label}
              </a>
            ))}
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`}
                className="mt-1 inline-flex w-fit items-center gap-2.5 rounded-full
                           bg-sage-700 dark:bg-sage-600 px-5 py-3
                           font-sans text-xs font-semibold tracking-wide text-white
                           hover:bg-sage-600 dark:hover:bg-sage-500 transition-colors"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {phoneNumber}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
