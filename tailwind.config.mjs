/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "serif"]
      },
      colors: {
        ink: "#172121",
        mist: "#eef3f1",
        pine: "#1e5b4f",
        river: "#34699a",
        signal: "#c05a2b"
      },
      boxShadow: {
        soft: "0 16px 45px rgb(23 33 33 / 0.08)"
      }
    }
  },
  plugins: []
};
