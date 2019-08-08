import React from "react";
//constants
import { panels } from "constants/Tabs/Content/accordion";
//class
import AccordionItem from "components/Tabs/Content/Accordion/Accordion";

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
    const { activePanels } = this.state;
    return (
      <React.Fragment>
        {panels.map(elem => (
          <AccordionItem
            key={elem.id}
            title={elem.title}
            content={elem.content}
            titleClick={this.titleClick(elem.id)}
            opened={activePanels.includes(elem.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Accordion;
