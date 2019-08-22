import React from "react";

const theme = {
  light: {
    color: "black",
    background: "white"
  },
  dark: {
    color: "white",
    background: "#272d39"
  }
};

export const ThemeContext = React.createContext(theme);
