import React, { useContext } from "react";
import PropTypes from "prop-types";
//styles
import {
  TableBody,
  Cell,
  Title,
  Row,
  RowContainer,
  TitleContainer
} from "styles/Tabs/Content/table";
//constants
import { ThemeContext } from "constants/Tabs/Content/theme";

const Titles = ({ title }) => (
  <TitleContainer number={title.length}>
    {title.map(elem => (
      <Title key={elem.toString()}>{elem}</Title>
    ))}
  </TitleContainer>
);

const TableContent = ({ content }) => (
  <RowContainer>
    {content.map((elem, index) => (
      <Row number={Object.keys(elem).length} key={index}>
        {Object.values(elem).map((item, ind) => (
          <Cell key={ind}>{item}</Cell>
        ))}
      </Row>
    ))}
  </RowContainer>
);

const Table = ({ title, content }) => (
  <TableBody
    color={useContext(ThemeContext).color}
    background={useContext(ThemeContext).background}
  >
    <Titles title={title} />
    <TableContent content={content} />
  </TableBody>
);

Table.propTypes = {
  title: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired
};

TableBody.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string
};
export default Table;
