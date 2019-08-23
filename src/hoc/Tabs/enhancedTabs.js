import React, { useState } from "react";
//constants
import { tabButtons } from "constants/Tabs/Item/tabItem";
//context
import { ThemeProvider } from "context-providers/Themes/light_dark";

const enhancedTabs = Component => {
  const EnhancedComponent = props => {
    const [activeTab, setActiveTab] = useState(tabButtons.first);

    const buttonClick = value => () => {
      setActiveTab(value);
    };

    return (
      <ThemeProvider>
        <Component {...props} activeTab={activeTab} buttonClick={buttonClick} />
      </ThemeProvider>
    );
  };

  EnhancedComponent.displayName = `enhancedTabs(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return EnhancedComponent;
};

export default enhancedTabs;
