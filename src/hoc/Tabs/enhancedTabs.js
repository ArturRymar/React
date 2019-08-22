import React, { useState, useContext } from "react";
//constants
import { tabButtons } from "constants/Tabs/Item/tabItem";
import { ThemeContext } from "constants/Tabs/Content/theme";

const enhancedTabs = Component => {
  const EnhancedComponent = props => {
    const theme = useContext(ThemeContext);
    const [activeTheme, setActiveTheme] = useState(theme.light);
    const [activeTab, setActiveTab] = useState(tabButtons.first);

    const buttonClick = value => () => {
      setActiveTab(value);
    };

    const changeTheme = () => {
      activeTheme === theme.light
        ? setActiveTheme(theme.dark)
        : setActiveTheme(theme.light);
    };

    return (
      <ThemeContext.Provider value={activeTheme}>
        <Component
          {...props}
          activeTab={activeTab}
          buttonClick={buttonClick}
          changeTheme={changeTheme}
        />
      </ThemeContext.Provider>
    );
  };

  EnhancedComponent.displayName = `enhancedTabs(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return EnhancedComponent;
};

export default enhancedTabs;
