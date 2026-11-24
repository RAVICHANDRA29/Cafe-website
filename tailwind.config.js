/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode — soft cream
        cream: {
          DEFAULT: '#FBF8F2',
          50:  '#FFFEF9',
          100: '#FBF8F2',
          200: '#F5F0E5',
          300: '#EDE5D3',
          400: '#E0D5BE',
          500: '#CDBFA3',
        },
        // Pale sage accent
        sage: {
          50:  '#F4F6F0',
          100: '#E6EBE0',
          200: '#CDD8C6',
          300: '#AEBFA4',
          400: '#8FA481',
          500: '#72895F',
          600: '#5A6E4A',
          700: '#455538',
          800: '#323E29',
          900: '#1F271A',
        },
        // Warm earthy tones
        earth: {
          50:  '#F7F2EC',
          100: '#EBE0D2',
          200: '#D4C0A7',
          300: '#B99E7E',
          400: '#9C7F5A',
          500: '#7E6240',
          600: '#614B2D',
          700: '#46351D',
          800: '#2D2112',
          900: '#170F07',
        },
        // Text
        ink: {
          DEFAULT: '#2D2A25',
          light: '#5A554C',
          muted: '#8C8880',
        },
        // Warm linen section bg
        linen: {
          DEFAULT: '#FAF7F2',
          dark: '#F2EEE6',
        },
        // ── Dark mode surface palette ──
        dark: {
          bg:      '#1A1712',   // page background
          surface: '#211E18',   // slight lift
          card:    '#2A2620',   // cards
          raised:  '#342F28',   // hover / raised
          border:  '#3D3830',   // borders
          text:    '#E8E0D5',   // primary text
          muted:   '#9A9088',   // muted text
        },
        // Legacy aliases kept for backward compat
        parchment: {
          50:  '#FFFEF9',
          100: '#FBF8F2',
          200: '#F5F0E5',
          300: '#EDE5D3',
          400: '#E0D5BE',
          500: '#CDBFA3',
        },
        wood: {
          200: '#D4C0A7',
          300: '#B99E7E',
          400: '#9C7F5A',
          600: '#614B2D',
          700: '#46351D',
        },
        rust: {
          DEFAULT: '#8F6241',
          300: '#C8956A',
          400: '#B07048',
          500: '#8F6241',
        },
        olive: {
          DEFAULT: '#72895F',
          300: '#AEBFA4',
          400: '#8FA481',
          500: '#72895F',
        },
        charcoal: {
          DEFAULT: '#1A1712',
          200: '#2A2620',
          300: '#1A1712',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif:   ['"Lora"', 'Georgia', 'serif'],
        sans:    ['"Josefin Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"Courier Prime"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft':    '0 2px 12px rgba(45,42,37,0.08), 0 1px 3px rgba(45,42,37,0.06)',
        'soft-lg': '0 8px 32px rgba(45,42,37,0.12), 0 2px 8px rgba(45,42,37,0.08)',
        'soft-xl': '0 20px 60px rgba(45,42,37,0.15), 0 4px 16px rgba(45,42,37,0.1)',
        'dark-soft':    '0 2px 12px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)',
        'dark-soft-lg': '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.25)',
        // Legacy
        'vintage':    '0 2px 8px rgba(44,26,14,0.1), 0 1px 2px rgba(44,26,14,0.06)',
        'vintage-lg': '0 8px 32px rgba(44,26,14,0.14), 0 2px 8px rgba(44,26,14,0.08)',
        'inset-top':  'inset 0 2px 8px rgba(44,26,14,0.08)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.7', transform: 'scale(0.95)' },
        },
      },
      borderRadius: {
        'vintage': '4px',
        'xl':  '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
