/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3b82f6", 
        "primary-vibrant": "#ec4899",
        "accent-pink": "#ec4899",
        "accent-lime": "#84cc16",
        "accent-cyan": "#06b6d4",
        "accent-indigo": "#6366f1",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        "display": ["Space Grotesk", "Outfit", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "2xl": "1rem", 
        "3xl": "1.5rem", 
        "4xl": "2.5rem", 
        "full": "9999px"
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'neon': '0 0 20px rgba(236, 72, 153, 0.5)',
        'vibrant': '0 20px 40px -10px rgba(236, 72, 153, 0.3)',
      },
      backgroundImage: {
        'gradient-vibrant': 'linear-gradient(135deg, #3b82f6 0%, #ec4899 50%, #84cc16 100%)',
        'gradient-text': 'linear-gradient(to right, #2563eb, #ec4899, #84cc16)',
        'mesh': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
      }
    },
  },
  plugins: [],
}
