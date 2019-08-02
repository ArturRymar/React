import React from "react";
import PropTypes from "prop-types";
//constants
import { tabItemName } from "constants/Tabs/Item/tabItem";
//styles
import { Item } from "styles/Tabs/Item/tabItem";

const TabItem = ({ buttonClick, activeTab }) => (
  <React.Fragment>
    {tabItemName.map(name => (
      <Item
        key={name.toString()}
        active={activeTab === name}
        onClick={buttonClick(name)}
      >
        {name}
      </Item>
    ))}
  </React.Fragment>
);

TabItem.propTypes = {
  activeTab: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired
};

Item.propTypes = {
  active: PropTypes.bool
};

export default TabItem;
