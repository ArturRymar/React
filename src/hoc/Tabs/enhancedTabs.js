import React from "react";
import { tabButtons } from "constants/Tabs/Item/tabItem";

const enhancedTabs = Component => {
  class EnhancedComponent extends React.Component {
    state = { activeTab: tabButtons.first };

    buttonClick = value => () => {
      this.setState({ activeTab: value });
    };

    render() {
      const { activeTab } = this.state;
      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          buttonClick={this.buttonClick}
        />
      );
    }
  }

  EnhancedComponent.displayName = `enhancedTabs(${Component.displayName ||
    Component.name ||
    "Component"})`;

  return EnhancedComponent;
};

export default enhancedTabs;
