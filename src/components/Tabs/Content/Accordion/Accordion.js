import React from "react";
import PropTypes from "prop-types";
//styles
import {
  ExpansionPanel,
  PanelTitle,
  PanelContent
} from "styles/Tabs/Content/accordion";

const AccordionItem = ({ title, content, opened, titleClick }) => (
  <ExpansionPanel opened={opened}>
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

export default AccordionItem;
