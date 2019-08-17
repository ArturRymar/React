import React, { useState } from "react";
import { tabButtons } from "constants/Tabs/Item/tabItem";

const enhancedTabs = Component => {
  const EnhancedComponent = props => {
    const [activeTab, setActiveTab] = useState(tabButtons.first);

    const buttonClick = value => () => {
      setActiveTab(value);
    };

    return (
      <Component {...props} activeTab={activeTab} buttonClick={buttonClick} />
    );
  };

  EnhancedComponent.displayName = `enhancedTabs(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return EnhancedComponent;
};

export default enhancedTabs;
