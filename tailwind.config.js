/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001529',  // Customize your primary color
        secondary: '#1890ff',  // Customize your secondary color
      },
    },
  },
  plugins: [],
}

