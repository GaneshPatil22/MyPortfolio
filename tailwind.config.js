module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "marquee-slow": "marquee 40s linear infinite",
        "marquee-medium": "marquee 25s linear infinite",
        "marquee-fast": "marquee 15s linear infinite",
        "marquee-reverse-slow": "marquee-reverse 40s linear infinite",
        "marquee-reverse-medium": "marquee-reverse 25s linear infinite",
        "marquee-reverse-fast": "marquee-reverse 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-75%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-75%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
