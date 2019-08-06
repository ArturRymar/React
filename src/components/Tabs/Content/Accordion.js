import React from "react";
import PropTypes from "prop-types";
//styles
import {
  ExpansionPanel,
  PanelTitle,
  PanelContent
} from "styles/Tabs/Content/accordion";

const AccordionItem = ({ title, content, opened, titleClick, id }) => (
  <ExpansionPanel opened={opened}>
    <PanelTitle onClick={titleClick(id)} opened={opened}>
      {title}
    </PanelTitle>
    <PanelContent opened={opened}>{content}</PanelContent>
  </ExpansionPanel>
);

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  titleClick: PropTypes.func.isRequired
};

export default AccordionItem;
