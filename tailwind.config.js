/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#0081ff",
                   
          "secondary": "#006cff",
                   
          "accent": "#00c2c6",
                   
          "neutral": "#2d1f2a",
                   
          "base-100": "#1c222b",
                   
          "info": "#15c9ff",
                   
          "success": "#00c762",
                   
          "warning": "#ffb400",
                   
          "error": "#e23e4a",
                   },
      },
    ],
  },
  plugins: [daisyui],
}