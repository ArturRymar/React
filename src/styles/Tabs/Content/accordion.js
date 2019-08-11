import styled, { css } from "styled-components";

const ExpansionPanel = styled.div`
  width: auto;
  height: 100%;
  background: white;
  color: black;
  margin-bottom: 1px;
  box-shadow: 0 1px 1px #a29e9e;
  ${({ opened }) =>
    opened &&
    css`
      margin: 10px 0;
    `};
`;

const PanelTitle = styled.div`
  color: black;
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    border: 5px solid transparent;
    border-top: 5px solid black;
    right: 20px;
    top: 15px;
    transform: ${({ opened }) =>
      opened &&
      `rotateZ(180deg)
      `};
    transition: transform 0.3s linear;
  }
`;

const PanelContent = styled.div`
  max-height: 0;
  overflow: hidden;
  font-size: 15px;
  margin-left: 15px;
  transition: max-height 0.1s linear;
  ${({ opened }) =>
    opened &&
    css`
      max-height: 600px;
      overflow: visible;
      transition: max-height 0.8s linear;
    `}
`;

const AccordionContainer = styled.div`
  background: #f5f5f5;
  margin-top: 10px;
  line-height: 35px;
`;

export { ExpansionPanel, PanelTitle, PanelContent, AccordionContainer };
