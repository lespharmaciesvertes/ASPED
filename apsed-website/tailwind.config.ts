import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette officielle APSED — couleurs du logo / drapeau de Djibouti
        ink: '#0b0f14',
        emerald: { DEFAULT: '#46a02e', dark: '#34801f' },
        sky: { DEFAULT: '#2aa6dd', light: '#aae3fe', dark: '#1c8cc0' },
        magenta: '#e01f16', // accent ROUGE (étoile)
        sand: '#f5f7f4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
};

export default config;
