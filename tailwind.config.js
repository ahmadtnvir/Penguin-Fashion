/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
