module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/ui"),
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#6d706f",
          200: "#20c991",
          300: "#009a9a",
          400: "#ffffff",
          500: "#000000",
        },
        light: {
          100: "#ffffff",
          200: "#6c0082",
          300: "#ffffff",
          400: "#000000",
          500: "#ffffff",
        },
        moreOne: {
          100: "#050505",
          200: "#222222",
          300: "#e3e4f5",
          400: "#f5f5f5",
          500: "#20e882",
        },
      },
    },
  },
};
