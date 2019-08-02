import React from "react";
//constants
import { panels } from "constants/Tabs/Content/accordion";
//class
import AccordionItem from "containers/Tabs/Content/Accordion";

const Accordion = () => (
  <React.Fragment>
    {panels.map(elem => (
      <AccordionItem key={elem.id} title={elem.title} content={elem.content} />
    ))}
  </React.Fragment>
);

export default Accordion;
