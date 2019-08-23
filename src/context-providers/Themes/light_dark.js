import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const themes = {
  light: {
    color: "black",
    background: "white"
  },
  dark: {
    color: "white",
    background: "#272d39"
  }
};

const ThemeContext = React.createContext(themes);

const ThemeProvider = ({ children }) => {
  const theme = useContext(ThemeContext);
  const [activeTheme, setActiveTheme] = useState(theme.light);

  const changeTheme = () => {
    setActiveTheme(activeTheme === theme.light ? theme.dark : theme.light);
  };

  const initial = { theme: activeTheme, changeTheme };

  return (
    <ThemeContext.Provider value={initial}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node
};

export { ThemeContext, ThemeProvider };
