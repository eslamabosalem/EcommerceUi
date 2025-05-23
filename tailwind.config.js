const flowbite = require("flowbite-react/tailwind");
  /** @type {import('tailwindcss').Config} */
  export default {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,ts,jsx,tsx,html}",
      "index.html",
      flowbite.content(),
    ],
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      extend: {
        screens: {
          "3xl": "1600px",
          "4xl": "1950px",
        },
      },
    },
    plugins: [flowbite.plugin()],
  };
  