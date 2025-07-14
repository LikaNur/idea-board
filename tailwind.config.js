/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "idea-gradient":
          "linear-gradient(135deg, #16273A 0%, #243b55 100%)",
      },
    },
  },
  plugins: [],
};
  