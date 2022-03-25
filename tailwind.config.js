module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#BAE36E",
          400: "#88B13F",
          500: "#588107",
        },
        secondary: {
          300: "#6CA4F2",
          400: "#3276BF",
          500: "#004B8E",
        },
        error: "#C62828",
        warning: "#FF5F52",
        progress: "#FFB300",
        cancel: "#455A64",
        close: "#718792",
        label: "#00000099",
        "gray-bg": "#00000008",
        "text-color": "#000000DE",
      },
    },
  },
  plugins: [],
};
