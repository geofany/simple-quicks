import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#2F80ED",
          dark: "#4F4F4F",
          darkGray: "#828282",
          gray: "#E0E0E0",
          white: "#F2F2F2",
        },
        indicator: {
          orange: "#F8B76B",
          purple: "#8785FF",
          red: "#EB5757",
          yellow: "#F2C94C",
        },
        chat: {
          orange: {
            primary: "#E5A443",
            secondary: "#FCEED3",
          },
          purple: {
            primary: "#9B51E0",
            secondary: "#EEDCFF",
          },
          green: {
            primary: "#43B78D",
            secondary: "#D2F2EA",
          },
        },
        sticker: {
          grey: "#E9F3FF",
          orange: {
            primary: "#FDCFA4",
            secondary: "#F9E9C3",
          },
          green: {
            primary: "#AFEBDB",
            secondary: "#CBF1C2",
          },
          purple: {
            primary: "#CFCEF9",
            secondary: "#F9E0FD",
          },
        },
      },
    },
  },
};
