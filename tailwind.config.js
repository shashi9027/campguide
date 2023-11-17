/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
       input_background: "#f7f7f7",
       blue: "#1e92c5",
       black: "#0e0e0d",
       white_800: "#faf3f3",
       grey_700: "#c4c3c1",
       grey_800: "#999c9b",
       grey_dark: "#7d7c73",
       pink_100: "#de9c9a",
       pink_200: "#f9f6f1",
       white: "rgb(255 255 255)",
       border_color: "#e3e3e3"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
