import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette dérivée du logo APSED
        ink: '#0b0f14',       // noir bleuté (silhouette)
        emerald: {
          DEFAULT: '#1f9d5a', // vert APSED
          dark: '#157a45',
        },
        sky: {
          DEFAULT: '#5bbfe0', // bleu clair APSED
          dark: '#3a9fc4',
        },
        magenta: '#d61f7a',   // étoile APSED (accent)
        sand: '#f6f7f5',      // fond clair
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
