import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundsWrapper = styled.div``;

export const NotFoundsText = styled.p`
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  font-size: 18px;
  line-height: 150%;
  color: #8a8a89;
  text-align: center;
`;

export const NotFoundsLink = styled(Link)`
  color: #f03f3b;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
