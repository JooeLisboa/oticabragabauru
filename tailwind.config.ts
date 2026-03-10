import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#140C09',
        panelSolid: '#2B1A14',
        gold: '#D5A35B',
        goldSoft: '#E7C78D',
        champagne: '#E9D7BE',
        cream: '#F8ECDD',
        bronze: '#9A6036'
      }
    }
  },
  plugins: []
};

export default config;
