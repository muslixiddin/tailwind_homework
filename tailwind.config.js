/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'client-bg': "url('./public/images/client-bg-img.svg')",
        'ready-bg': "url('./public/images/ready-bg-img.svg')",
      }
    },
  },
  plugins: [],
}

