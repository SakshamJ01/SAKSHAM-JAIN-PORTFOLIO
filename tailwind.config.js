/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        navy: {
          950: '#080D14',
          900: '#0F1A26',
          800: '#142132',
          700: '#1E2F46',
          600: '#2C415D',
        },
        brand: {
          navy: '#142132',
          gold: '#E8C58D',
          amber: '#D4A373',
          slate: '#76949F',
          ivory: '#FAF8F5',
        },
        ink: {
          DEFAULT: '#14202D',
          deep: '#172433',
          muted: '#687581',
          light: '#8E9BA7',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          soft: '#F5F1E8',
          sand: '#F3EFE9',
          pure: '#FCFBF8',
        },
        sun: {
          gold: '#E8C58D',
          glow: '#F6E4C4',
          core: '#FFF7ED',
          warm: '#F1CF98',
          sunset: '#DF6A44',
        },
        moonlight: {
          DEFAULT: '#D9E3EA',
          soft: '#B8C3CC',
          glow: 'rgba(217, 227, 234, 0.4)',
        },
        water: {
          pale: '#AFCBD3',
          calm: '#9FC3CF',
          mist: '#91AEB7',
          dark: '#182536',
        },
      },
      letterSpacing: {
        widest2: '0.28em',
        cinematic: '0.35em',
        ultra: '0.3em',
      },
      animation: {
        'subtle-pulse': 'pulseSlow 9s ease-in-out infinite',
        'water-drift': 'waterShimmer 16s ease-in-out infinite alternate',
        'sun-ambient': 'sunGlow 11s ease-in-out infinite alternate',
        'scroll-bob': 'scrollBob 3s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '0.98', transform: 'scale(1.04)' },
        },
        sunGlow: {
          '0%': { transform: 'translateY(0px) scale(1)', opacity: '0.9' },
          '100%': { transform: 'translateY(-4px) scale(1.03)', opacity: '1' },
        },
        waterShimmer: {
          '0%': { opacity: '0.3', transform: 'translateY(0px) scaleY(1)' },
          '100%': { opacity: '0.5', transform: 'translateY(-3px) scaleY(1.02)' },
        },
        scrollBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '0.65', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.18)' },
        },
      },
    },
  },
  plugins: [],
};
