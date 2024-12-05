/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816", // Couleur de fond pour le mode sombre
        secondary: "#aaa6c3", // Couleur secondaire pour le texte, etc.
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3", // Couleur de fond pour le mode clair

        // Définition des couleurs pour le mode clair et sombre
        "bg-light": "#ffffff", // Arrière-plan clair
        "bg-dark": "#050816", // Arrière-plan sombre
        "text-light": "#000000", // Texte clair
        "text-dark": "#f3f3f3", // Texte sombre
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
