import styled, { css } from "styled-components";

const Container = styled.div`
  width: 850px;
  height: 100%;
  background: #f5f5f5;
  padding: 15px;
`;

const TabContainer = styled.div`
  width: 850px;
  height: 45px;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: 0 1px 3px black;
    z-index: -1;
  }
`;

const ContentContainer = styled.div`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  width: auto;
  height: auto;
  line-height: 55px;
`;

const Content = styled.div`
  margin-left: 15px;
  font-size: 15px;
  margin-top: 15px;
`;

const Item = styled.button`
  height: 45px;
  width: 120px;
  outline: none;
  background: inherit;
  color: inherit;
  font-size: 12px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  line-height: 45px;
  opacity: 0.5;
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      border-bottom: 1.5px solid #d9386a;
      transition: color 0.3s ease-in-out;
    `};
`;

export { Item, Content, ContentContainer, TabContainer, Container };
