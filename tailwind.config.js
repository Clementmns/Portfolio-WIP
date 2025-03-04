/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
      "./assets/**/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: "class",
   theme: {
      extend: {
         fontSize: {
            hero: "14rem",
         },
         fontFamily: {
            basic: ['"degular", sans-serif'],
            heroUse: ['"freight-big-pro", sans-serif'],
         },
         colors: {
            "primary-light": "#FF521C",
            "primary-dark": "#FF6433",
            "background-light": "#FAF4EC",
            "text-light": "#2D232E",
            "background-dark": "#2D232E",
            "text-dark": "#FAF4EC",
         },
      },
   },
   plugins: [],
};
