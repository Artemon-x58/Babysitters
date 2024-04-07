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

export const NavListPagesItem = styled.li``;

export const NavListPagesLink = styled(NavLink)`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;

  &.active {
    &::after {
      content: "";
      position: absolute;
      right: calc(50% - 4px);

      bottom: -14px;
      width: 8px;
      height: 8px;
      border-radius: 180px;
      background-color: #fff;
    }
  }
`;

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

export const NavUserWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 24px;
`;

export const NavUserIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 14px;

  background-color: #f3f3f3;
`;

export const NavUserSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const NavUserSvgAndNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const NavUserName = styled.p`
  font-size: 18px;
  line-height: 111%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;

export const NavBtnLogOut = styled(NavBtnReg)`
  min-width: 134px;
`;
