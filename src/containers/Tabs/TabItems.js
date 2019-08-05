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
//components
import TabItem from "components/Tabs/Item/TabItem";
import Accordion from "containers/Tabs/Content/Accordion";

class Tabs extends React.Component {
  state = { activeTab: tabButtons.first };

  buttonClick = value => () => {
    this.setState({ activeTab: value });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Container>
        <TabContainer>
          <TabItem activeTab={activeTab} buttonClick={this.buttonClick} />
        </TabContainer>
        <ContentContainer>
          {activeTab === tabButtons.first && (
            <AccordionContainer>
              <Accordion />
            </AccordionContainer>
          )}
          {activeTab === tabButtons.second && (
            <Content>{tabContent.second}</Content>
          )}
          {activeTab === tabButtons.third && (
            <Content>{tabContent.third}</Content>
          )}
        </ContentContainer>
      </Container>
    );
  }
}

export default Tabs;
