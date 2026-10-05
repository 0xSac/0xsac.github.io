// Shared Tailwind CDN theme for the 0xSAC static portal pages.
// Must be loaded immediately after https://cdn.tailwindcss.com.
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          900: '#0a0a0a',
          800: '#111113',
          700: '#18181b',
        },
        term: {
          green: '#4ade80',
          cyan: '#22d3ee',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(63,63,70,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.18) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.25), 0 0 24px -4px rgba(34,211,238,0.35)',
        'glow-green': '0 0 0 1px rgba(74,222,128,0.25), 0 0 24px -4px rgba(74,222,128,0.35)',
      },
    },
  },
};
