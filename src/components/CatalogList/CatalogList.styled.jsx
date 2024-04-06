import styled from "styled-components";

export const CatalogListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`;

export const CatalogListBtn = styled.button`
  display: block;
  border-radius: 30px;
  padding: 14px 40px;
  max-width: 159px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  border: none;
  background: #f03f3b;
  transition: color 250ms linear, background-color 250ms linear;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;

  &:hover {
    background-color: #fbfbfb;
    color: #f03f3b;
  }
`;
