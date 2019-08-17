import React from "react";
import PropTypes from "prop-types";

class Accordion extends React.Component {
  state = { activePanels: [] };

  titleClick = id => () => {
    const { activePanels } = this.state;
    const opened = activePanels.includes(id)
      ? activePanels.filter(item => item !== id)
      : [...activePanels, id];
    this.setState({ activePanels: opened });
  };

  render() {
    return this.props.children({
      activePanels: this.state.activePanels,
      titleClick: this.titleClick
    });
  }
}

Accordion.propTypes = {
  children: PropTypes.func.isRequired
};

export default Accordion;
