import React, { useContext } from "react";
import PropTypes from "prop-types";
//styles
import {
  Container,
  TabContainer,
  ContentContainer,
  Content
} from "styles/Tabs/Item/tabItem";
import { AccordionContainer } from "styles/Tabs/Content/accordion";
import { ThemeButton } from "styles/Tabs/Content/table";
//constants
import { tabButtons, tabContent } from "constants/Tabs/Item/tabItem";
import { tableTitle, tableContent } from "constants/Tabs/Content/table";
import { panels } from "constants/Tabs/Content/accordion";
//context
import { ThemeContext } from "context-providers/Themes/light_dark";
//components
import TabItem from "components/Tabs/Item/TabItem";
import Accordion from "renderProps/Accordion/index";
import Table from "components/Tabs/Content/Table/Table";
import enhancedTabs from "hoc/Tabs/enhancedTabs";
import AccordionItem from "components/Tabs/Content/Accordion/Accordion";

const Tabs = props => {
  const { buttonClick, activeTab, changeTheme } = props;
  return (
    <Container>
      <TabContainer
        color={useContext(ThemeContext).color}
        background={useContext(ThemeContext).background}
      >
        <TabItem activeTab={activeTab} buttonClick={buttonClick} />
      </TabContainer>
      <ContentContainer
        color={useContext(ThemeContext).color}
        background={useContext(ThemeContext).background}
      >
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
          <React.Fragment>
            <Table title={tableTitle} content={tableContent} />
            <ThemeButton onClick={changeTheme}>ChangeTheme</ThemeButton>
          </React.Fragment>
        )}
        {activeTab === tabButtons.third && (
          <Content>{tabContent.third}</Content>
        )}
      </ContentContainer>
    </Container>
  );
};

TabContainer.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string
};

ContentContainer.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string
};

export default enhancedTabs(Tabs);
