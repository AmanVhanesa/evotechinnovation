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
        '2xl': '1180px',
      },
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        soft: 'var(--bg-soft)',
        raised: 'var(--bg-raised)',
        ink: 'var(--ink)',
        ink2: 'var(--ink-2)',
        ink3: 'var(--ink-3)',
        line: 'var(--line)',
        linestrong: 'var(--line-strong)',
        brand: {
          DEFAULT: 'var(--cyan)',
          teal: 'var(--teal)',
          tealsoft: 'var(--teal-soft)',
          cyan: 'var(--cyan)',
          violet: 'var(--violet)',
        },
        primary: 'var(--cyan)',
        accent: 'var(--teal)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
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
        glow: 'var(--shadow-glow)',
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-brand-soft': 'var(--gradient-brand-soft)',
      },
      maxWidth: {
        content: '1180px',
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
          '50%': { transform: 'translateY(-12px)' },
        },
        'aurora-a': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(8%, 10%) scale(1.12)' },
          '66%': { transform: 'translate(-6%, 4%) scale(0.94)' },
        },
        'aurora-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '40%': { transform: 'translate(-10%, -8%) scale(1.08)' },
          '70%': { transform: 'translate(6%, -12%) scale(0.96)' },
        },
        'aurora-c': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(10%, -10%) scale(1.15)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.8)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        'aurora-a': 'aurora-a 18s ease-in-out infinite',
        'aurora-b': 'aurora-b 22s ease-in-out infinite',
        'aurora-c': 'aurora-c 26s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-slower': 'spin-slow 70s linear infinite reverse',
        shimmer: 'shimmer 6s linear infinite',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
