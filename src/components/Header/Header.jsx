import { Container } from "../Container/Container";
import {
  HeaderBtnLogIn,
  HeaderBtnReg,
  HeaderListBtns,
  HeaderListBtnsItem,
  HeaderListPages,
  HeaderListPagesItem,
  HeaderListPagesLink,
  HeaderStyled,
  Logo,
  NavStyled,
} from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Logo>Nanny.Services</Logo>
        <NavStyled>
          <HeaderListPages>
            <HeaderListPagesItem>
              <HeaderListPagesLink>Home</HeaderListPagesLink>
            </HeaderListPagesItem>
            <HeaderListPagesItem>
              <HeaderListPagesLink>Nannies</HeaderListPagesLink>
            </HeaderListPagesItem>
          </HeaderListPages>
        </NavStyled>

        <HeaderListBtns>
          <HeaderListBtnsItem>
            <HeaderBtnLogIn>Log In</HeaderBtnLogIn>
          </HeaderListBtnsItem>
          <HeaderListBtnsItem>
            <HeaderBtnReg>Registration</HeaderBtnReg>
          </HeaderListBtnsItem>
        </HeaderListBtns>
      </HeaderStyled>
    </Container>
  );
};
