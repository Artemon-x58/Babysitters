import styled from "styled-components";

export const ReviewsListStyled = styled.ul`
  margin-top: 48px;
`;

export const ReviewsListBtn = styled.button`
  border-radius: 30px;
  border: none;
  padding: 14px 28px;
  min-width: 215px;
  height: 48px;
  background: #f03f3b;
  transition: color 250ms linear, background 250ms linear;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;

  &:hover,
  &:focus {
    background: #fbfbfb;
    color: #f03f3b;
  }
`;
