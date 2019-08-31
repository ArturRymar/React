import React from "react";
import { useDispatch, useSelector } from "react-redux";
//context
import { ThemeProvider } from "context-providers/Themes/light_dark";
//store
import { setActiveTabs } from "store/modules/tabs";

const enhancedTabs = Component => {
  const EnhancedComponent = props => {
    const dispatch = useDispatch();
    const buttonClick = payload => dispatch(setActiveTabs(payload));
    const { activeTab } = useSelector(state => ({
      activeTab: state.tabs.activeTab
    }));

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
