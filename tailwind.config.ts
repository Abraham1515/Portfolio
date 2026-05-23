import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F0E0D',
        surface: '#1A1917',
        card: '#232220',
        accent: '#FF5C35',
        'accent-light': '#FF7A5C',
        text: '#F7F4F0',
        muted: '#7A7570',
        border: '#2D2B29',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
}

export default config
