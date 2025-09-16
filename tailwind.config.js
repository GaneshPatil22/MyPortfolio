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
        "fadeInUp": "fadeInUp 5s ease-out forwards",
        "fadeOutDown": "fadeOutDown 5s ease-in forwards",
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
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // <-- add this
  ],
};
