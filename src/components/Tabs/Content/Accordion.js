import React from "react";
import PropTypes from "prop-types";
//styles
import {
  ExpansionPanel,
  PanelTitle,
  PanelContent
} from "styles/Tabs/Content/accordion";

const AccordionItem = ({ title, content, opened, titleClick, panelTitle }) => (
  <ExpansionPanel opened={panelTitle === title && opened === true}>
    <PanelTitle
      onClick={titleClick(title)}
      opened={panelTitle === title && opened === true}
    >
      {title}
    </PanelTitle>
    <PanelContent opened={panelTitle === title && opened === true}>
      {content}
    </PanelContent>
  </ExpansionPanel>
);

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  panelTitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
  ]).isRequired,
  titleClick: PropTypes.func.isRequired
};

export default AccordionItem;
