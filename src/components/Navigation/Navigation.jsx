import {
  Logo,
  NavBtnLogIn,
  NavBtnReg,
  NavListBtns,
  NavListBtnsItem,
  NavListPages,
  NavListPagesItem,
  NavListPagesLink,
  NavStyled,
} from "../Navigation/Navigation.styled";
import { NavContainer } from "../Navigation/Navigation.styled";

export const Navigation = () => {
  return (
    <NavContainer>
      <NavStyled>
        <Logo>Nanny.Services</Logo>

        <NavListPages>
          <NavListPagesItem>
            <NavListPagesLink>Home</NavListPagesLink>
          </NavListPagesItem>
          <NavListPagesItem>
            <NavListPagesLink>Nannies</NavListPagesLink>
          </NavListPagesItem>
        </NavListPages>

        <NavListBtns>
          <NavListBtnsItem>
            <NavBtnLogIn>Log In</NavBtnLogIn>
          </NavListBtnsItem>
          <NavListBtnsItem>
            <NavBtnReg>Registration</NavBtnReg>
          </NavListBtnsItem>
        </NavListBtns>
      </NavStyled>
    </NavContainer>
  );
};
