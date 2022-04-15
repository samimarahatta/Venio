module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#BAE36E1A",
          300: "#BAE36E",
          400: "#88B13F",
          500: "#588107",
        },
        secondary: {
          200: "#3276BF1A",
          300: "#6CA4F2",
          400: "#3276BF",
          500: "#004B8E",
        },
        error: "#C62828",
        warning: "#FF5F52",
        "warning-bg": "#FF5F521A",
        progress: "#FFB300",
        cancel: "#455A64",
        close: "#718792",
        label: "#00000099",
        red:"#ffdfdc",
        orange: "#fff7e5",
        green: "#dee6cd",
        "gray-bg": "#00000008",
        "text-color": "#000000DE",
        "login-bg": "#0000000C",
        "timeline": "#00000005"
      },
      boxShadow:{
        '3xl':'0px 3px 10px #00000029'
      }
    },
  },
  plugins: [],
};
