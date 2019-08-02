import styled, { css } from "styled-components";

const Container = styled.div`
  width: 600px;
  height: 100%;
  background: #f5f5f5;
  padding: 15px;
`;

const TabContainer = styled.div`
  width: 600px;
  height: 45px;
  background: #375dd6;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: 0 3px 5px black;
    z-index: -1;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  background: white;
  color: black;
  line-height: 55px;
`;

const Content = styled.div`
  margin-left: 15px;
  font-size: 15px;
`;

const Item = styled.button`
  height: 45px;
  width: 120px;
  outline: none;
  background: transparent;
  font-size: 12px;
  cursor: pointer;
  border: none;
  color: #dedddd;
  font-weight: bold;
  line-height: 45px;
  ${({ active }) =>
    active &&
    css`
      color: white;
      border-bottom: 1.5px solid #d9386a;
      transition: color 0.3s ease-in-out;
    `}
`;

export { Item, Content, ContentContainer, TabContainer, Container };
