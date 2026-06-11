import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: 'rgb(var(--brand-navy) / <alpha-value>)',
          'navy-dark': 'rgb(var(--brand-navy-dark) / <alpha-value>)',
          'navy-light': 'rgb(var(--brand-navy-light) / <alpha-value>)',
          orange: 'rgb(var(--brand-orange) / <alpha-value>)',
          'orange-dark': 'rgb(var(--brand-orange-dark) / <alpha-value>)',
          'orange-light': 'rgb(var(--brand-orange-light) / <alpha-value>)',
          sand: 'rgb(var(--brand-sand) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px -6px rgb(2 6 54 / 0.08)',
        lift: '0 12px 32px -12px rgb(2 6 54 / 0.16)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
