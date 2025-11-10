export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-1': 'var(--color-1)',
        'custom-2': 'var(--color-2)',
        'custom-3': 'var(--color-3)',
        'custom-4': 'var(--color-4)',
        'custom-5': 'var(--color-5)',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

