import styled from "styled-components";

const TableBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid black;
  margin-top: 10px;
  font-size: 13px;
  position: relative;
  z-index: 1;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: 0 2px 5px #a29e9e;
    z-index: -1;
  }
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  div:first-child {
    border-top: none;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(${({ number }) => number - 1}, 1fr);
  border-top: 1px solid black;
  div:first-child {
    text-align: left;
  }
`;

const Cell = styled.div`
  padding: 0 6px;
  display: grid;
  line-height:25px;
  text-align: right
  align-items:center; 
`;

const Title = styled.div`
  padding: 0 6px;
  text-align: right;
  font-weight: bold;
  opacity: 0.4;
  line-height: 40px;
  border-bottom: 1px solid black;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(${({ number }) => number - 1}, 1fr);
  div:first-child {
    text-align: left;
  }
`;

const ThemeButton = styled.button`
  height: 30px;
  width: 120px;
  border-radius: 15px;
  border: 2px solid #8a8888;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
  outline: none;
  background: lightblue;
  font-size: 14px;
  cursor: pointer;
  margin: 15px;
  &:active {
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.3), 0 1px 0 rgba(0, 0, 0, 0.3);
  }
`;

export {
  TableBody,
  Cell,
  Title,
  Row,
  RowContainer,
  TitleContainer,
  ThemeButton
};
