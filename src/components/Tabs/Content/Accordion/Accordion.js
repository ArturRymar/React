import React, { useContext } from "react";
import PropTypes from "prop-types";
//styles
import {
  ExpansionPanel,
  PanelTitle,
  PanelContent
} from "styles/Tabs/Content/accordion";
//constants
import { ThemeContext } from "constants/Tabs/Content/theme";

const AccordionItem = ({ title, content, opened, titleClick }) => (
  <ExpansionPanel
    opened={opened}
    color={useContext(ThemeContext).color}
    background={useContext(ThemeContext).background}
  >
    <PanelTitle onClick={titleClick} opened={opened}>
      {title}
    </PanelTitle>
    <PanelContent opened={opened}>{content}</PanelContent>
  </ExpansionPanel>
);

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  titleClick: PropTypes.func.isRequired
};

ExpansionPanel.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string
};

export default AccordionItem;
