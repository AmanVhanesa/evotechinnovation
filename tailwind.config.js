/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2.5rem',
      },
      screens: {
        '2xl': '1120px',
      },
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        soft: 'var(--bg-soft)',
        tint: 'var(--bg-tint)',
        ink: 'var(--ink)',
        ink2: 'var(--ink-2)',
        ink3: 'var(--ink-3)',
        line: 'var(--line)',
        brand: {
          DEFAULT: 'var(--brand-blue)',
          blue: 'var(--brand-blue)',
          bluedeep: 'var(--brand-blue-deep)',
          green: 'var(--brand-green)',
          greendeep: 'var(--brand-green-deep)',
        },
        primary: 'var(--brand-blue)',
        accent: 'var(--brand-green)',
        dark: 'var(--ink)',
        muted: 'var(--bg-soft)',
        surface: 'var(--bg)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.022em',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        lift: 'var(--shadow-lift)',
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
      },
      maxWidth: {
        content: '1120px',
        prose: '720px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
