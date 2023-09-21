import type { Config } from 'tailwindcss'

const config: Config = {
  // darkMode: ['class', '[data-theme="dark"]'],
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: 'hsl(var(--text) /<alpha-value>)',
        background: 'hsl(var(--background) /<alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) /<alpha-value>)',
        accent: 'hsl(var(--accent) /<alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
