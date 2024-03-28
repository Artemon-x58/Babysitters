import styled from "styled-components";

export const NavStyled = styled.nav`
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;

    height: 1px;
    width: 100%;
    background-color: rgba(251, 251, 251, 0.4);
  }
`;

export const Logo = styled.a`
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

export const NavListPagesLink = styled.a``;

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
`;

export const NavBtnReg = styled.button`
  border-radius: 30px;
  padding: 14px 40px;
  min-width: 168px;
  height: 48px;
  background-color: #f03f3b;
  border: none;

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
