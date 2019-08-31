import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
//store
import { setActivePanel } from "store/modules/panels";

const Accordion = props => {
  const dispatch = useDispatch();
  const titleClick = id => dispatch(setActivePanel(id));
  const { activePanels } = useSelector(state => ({
    activePanels: state.panels.activePanels
  }));

  return props.children({
    activePanels: activePanels,
    titleClick
  });
};

Accordion.propTypes = {
  children: PropTypes.func.isRequired
};

export default Accordion;
