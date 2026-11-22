/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#030508',
        obsidian: '#070b10',
        panel: '#0d131e',
        'panel-light': '#141e2e',
        'panel-border': '#1d2a3e',
        cyber: {
          green: '#00ff88',
          dim: '#00aa5b',
          glow: 'rgba(0, 255, 136, 0.15)',
        },
        forest: {
          deep: '#061711',
          emerald: '#10b981',
          glow: 'rgba(16, 185, 129, 0.15)',
        },
        neon: {
          cyan: '#00e5ff',
          dim: '#0284c7',
        },
        cosmic: {
          purple: '#8b5cf6',
          midnight: '#0b132b',
        },
        amber: {
          accent: '#f59e0b',
        },
        arasaka: {
          red: '#ff1e3c',
          dim: '#850e1e',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'cyber-sm': '0 0 10px rgba(0, 255, 136, 0.2)',
        'cyber-md': '0 0 20px rgba(0, 255, 136, 0.3)',
        'cyan-sm': '0 0 10px rgba(0, 229, 255, 0.2)',
        'arasaka-sm': '0 0 10px rgba(255, 30, 60, 0.25)',
        'hud-slot': 'inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
};
