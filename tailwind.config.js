/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        ink: 'var(--ink)',
        soft: 'var(--soft)',
        faint: 'var(--faint)',
        pine: 'var(--accent)',
        amber: 'var(--accent)',
      },
      fontFamily: {
        head: ['"Fraunces"', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '680px',
      },
    },
  },
  plugins: [],
}
