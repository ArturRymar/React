import React from "react";
import PropTypes from "prop-types";
//styles
import {
  ExpansionPanel,
  PanelTitle,
  PanelContent
} from "styles/Tabs/Content/accordion";

class AccordionItem extends React.Component {
  state = { opened: false };

  titleClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const {
      props: { title, content },
      state: { opened }
    } = this;
    return (
      <ExpansionPanel opened={opened}>
        <PanelTitle onClick={this.titleClick} opened={opened}>
          {title}
        </PanelTitle>
        <PanelContent opened={opened}>{content}</PanelContent>
      </ExpansionPanel>
    );
  }
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default AccordionItem;
