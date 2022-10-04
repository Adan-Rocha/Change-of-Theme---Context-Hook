// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    // etc.
  ],

  // Include any special characters you're using in this regular expression
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
};