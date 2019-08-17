import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = props => {
  const [activePanels, setActivePanel] = useState([]);

  const titleClick = id => () => {
    const opened = activePanels.includes(id)
      ? activePanels.filter(item => item !== id)
      : [...activePanels, id];
    setActivePanel(opened);
  };

  return props.children({
    activePanels: activePanels,
    titleClick: titleClick
  });
};

Accordion.propTypes = {
  children: PropTypes.func.isRequired
};

export default Accordion;
