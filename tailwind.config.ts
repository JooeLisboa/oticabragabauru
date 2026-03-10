import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1b1410',
        mocha: '#2c1f19',
        bronze: '#b88a4a',
        champagne: '#e8d9c5',
        cream: '#f8f2e8'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(184,138,74,0.2), 0 10px 35px rgba(0,0,0,0.35)',
        soft: '0 8px 25px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        luxe: 'radial-gradient(circle at top, rgba(184,138,74,0.18), transparent 45%), radial-gradient(circle at 90% 20%, rgba(255,255,255,0.08), transparent 35%)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
