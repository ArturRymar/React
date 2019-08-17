import React from "react";
//styles
import {
  Container,
  TabContainer,
  ContentContainer,
  Content
} from "styles/Tabs/Item/tabItem";
import { AccordionContainer } from "styles/Tabs/Content/accordion";
//constants
import { tabButtons, tabContent } from "constants/Tabs/Item/tabItem";
import { tableTitle, tableContent } from "constants/Tabs/Content/table";
import { panels } from "constants/Tabs/Content/accordion";
//components
import TabItem from "components/Tabs/Item/TabItem";
import Accordion from "renderProps/Tabs/Content/Accordion/index";
import Table from "components/Tabs/Content/Table/Table";
import enhancedTabs from "hoc/Tabs/enhancedTabs";
import AccordionItem from "components/Tabs/Content/Accordion/Accordion";

const Tabs = props => {
  const { buttonClick, activeTab } = props;
  return (
    <Container>
      <TabContainer>
        <TabItem activeTab={activeTab} buttonClick={buttonClick} />
      </TabContainer>
      <ContentContainer>
        {activeTab === tabButtons.first && (
          <AccordionContainer>
            <Accordion>
              {({ activePanels, titleClick }) =>
                panels.map(elem => (
                  <AccordionItem
                    key={elem.id}
                    title={elem.title}
                    content={elem.content}
                    titleClick={titleClick(elem.id)}
                    opened={activePanels.includes(elem.id)}
                  />
                ))
              }
            </Accordion>
          </AccordionContainer>
        )}
        {activeTab === tabButtons.second && (
          <Table title={tableTitle} content={tableContent} />
        )}
        {activeTab === tabButtons.third && (
          <Content>{tabContent.third}</Content>
        )}
      </ContentContainer>
    </Container>
  );
};

export default enhancedTabs(Tabs);
