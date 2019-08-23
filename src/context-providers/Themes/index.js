import React from "react";
import PropTypes from "prop-types";

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

const ThemeContext = React.createContext(theme);

const ThemeProvider = ({children, value}) => (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
    children: PropTypes.element,
    value: PropTypes.objectOf(PropTypes.string)
};

export { ThemeContext, ThemeProvider };
