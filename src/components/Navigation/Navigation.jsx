import { useState } from "react";
import {
  Logo,
  NavBtnLogIn,
  NavBtnReg,
  NavContainer,
  NavListBtns,
  NavListBtnsItem,
  NavListPages,
  NavListPagesItem,
  NavListPagesLink,
  NavStyled,
} from "../Navigation/Navigation.styled";
import { Modal } from "@mui/material";
import { FormComponent } from "../FormComponent/FormComponent";

export const Navigation = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLogInOrReg, setIsLogInOrReg] = useState("logIn");

  const handleOpenModalLogIn = () => {
    setIsOpenModal(true);
    setIsLogInOrReg("logIn");
  };
  const handleOpenModalReg = () => {
    setIsOpenModal(true);
    setIsLogInOrReg("registration");
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    setIsLogInOrReg("");
  };

  return (
    <>
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
              <NavBtnLogIn onClick={handleOpenModalLogIn}>Log In</NavBtnLogIn>
            </NavListBtnsItem>
            <NavListBtnsItem>
              <NavBtnReg onClick={handleOpenModalReg}>Registration</NavBtnReg>
            </NavListBtnsItem>
          </NavListBtns>
        </NavStyled>
      </NavContainer>
      <Modal open={isOpenModal} onClose={handleCloseModal}>
        <div>
          <FormComponent
            isLogInOrReg={isLogInOrReg}
            onClose={handleCloseModal}
          />
        </div>
      </Modal>
    </>
  );
};
