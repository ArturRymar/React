import React, { useState, useContext } from "react";
//constants
import { tabButtons } from "constants/Tabs/Item/tabItem";
import { ThemeContext, ThemeProvider } from "context-providers/Themes/index";

const enhancedTabs = Component => {
  const EnhancedComponent = props => {
    const theme = useContext(ThemeContext);
    const [activeTheme, setActiveTheme] = useState(theme.light);
    const [activeTab, setActiveTab] = useState(tabButtons.first);

    const buttonClick = value => () => {
      setActiveTab(value);
    };

    const changeTheme = () => {
      setActiveTheme(activeTheme === theme.light ? theme.dark : theme.light);
    };

    return (
      <ThemeProvider value={activeTheme}>
        <Component
          {...props}
          activeTab={activeTab}
          buttonClick={buttonClick}
          changeTheme={changeTheme}
        />
      </ThemeProvider>
    );
  };

  EnhancedComponent.displayName = `enhancedTabs(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return EnhancedComponent;
};

export default enhancedTabs;
