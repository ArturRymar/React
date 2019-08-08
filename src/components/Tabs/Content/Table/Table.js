import React from "react";
import { tableTitle, tableContent } from "constants/Tabs/Content/table";
// import PropTypes from "prop-types";
//styles
import {
  TableBody,
  Cell,
  Title,
  Row,
  RowContainer,
  TitleContainer
} from "styles/Tabs/Content/table";

const Titles = () => (
  <TitleContainer>
    {tableTitle.map(elem => (
      <Title key={elem.toString()}>{elem}</Title>
    ))}
  </TitleContainer>
);

const TableContent = () => (
  <RowContainer>
    {tableContent.map((elem, index) => (
      <Row key={index}>
        {Object.values(elem).map((item, ind) => (
          <Cell key={ind}>
            {item}
          </Cell>
        ))}
      </Row>
    ))}
  </RowContainer>
);

const Table = () => (
  <TableBody>
    <Titles />
    <TableContent />
  </TableBody>
);

export default Table;
