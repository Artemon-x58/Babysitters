import styled from "styled-components";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";

export const NavContainer = styled(Container)`
  padding: 0 96px;
  position: relative;
`;

export const NavStyled = styled.nav`
  position: ${({ $currentPath }) =>
    $currentPath === "/" ? "absolute" : "unset"};
  right: 96px;
  left: 96px;
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  z-index: 10;
  padding-top: ${({ $currentPath }) =>
    $currentPath === "/" ? "20px" : "30px"};
  padding-bottom: ${({ $currentPath }) =>
    $currentPath === "/" ? "0px" : "30px"};
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #fbfbfb;
  margin-right: auto;
`;

export const NavListPages = styled.ul`
  display: flex;
  gap: 40px;
  margin-right: 92px;
`;

export const NavListPagesItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;

export const NavListPagesLink = styled(NavLink)``;

export const NavListBtns = styled.ul`
  display: flex;
  gap: 8px;
`;

export const NavListBtnsItem = styled.li``;

export const NavBtnLogIn = styled.button`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 14px 39px;
  min-width: 124px;
  height: 48px;
  background-color: transparent;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    background-color: #fbfbfb;
    color: #f03f3b;
  }
`;

export const NavBtnReg = styled(NavBtnLogIn)`
  min-width: 168px;
  background-color: #f03f3b;
  border: ${({ $currentPath }) =>
    $currentPath === "/" ? "none" : "1px solid rgba(251, 251, 251, 0.4)"};
`;
