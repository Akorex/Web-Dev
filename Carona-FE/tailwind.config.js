/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        vehicleIcon: "0px 0px 4px 0px #0000001A",
      },
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        primary: {
          10: "#0B996F",
          20: "#E2F4EA",
          30: "#319A64",
        },
        dim: "#667085",
        lightGreen: "#0E8045",
        lightBlue: "#1E8DFD",
        dark: "#000",
        sidebarBg: "#F2F4F7",
        border: "#EAECF0",
      },
    },
  },
  plugins: [],
}

