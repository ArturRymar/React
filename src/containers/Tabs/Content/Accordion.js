import React from "react";
//constants
import { panels } from "constants/Tabs/Content/accordion";
//class
import AccordionItem from "components/Tabs/Content/Accordion";

class Accordion extends React.Component {
  state = { opened: false, panelTitle: "" };

  titleClick = value => () => {
    this.setState({ opened: !this.state.opened, panelTitle: value });
  };

  render() {
    const { opened, panelTitle } = this.state;
    return (
      <React.Fragment>
        {panels.map(elem => (
          <AccordionItem
            key={elem.id}
            title={elem.title}
            content={elem.content}
            titleClick={this.titleClick}
            opened={opened}
            panelTitle={panelTitle}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Accordion;
