import { useEffect, useState } from "react";
import {
  Logo,
  NavBtnLogIn,
  NavBtnLogOut,
  NavBtnReg,
  NavContainer,
  NavListBtns,
  NavListBtnsItem,
  NavListPages,
  NavListPagesItem,
  NavListPagesLink,
  NavStyled,
  NavUserIconWrapper,
  NavUserName,
  NavUserSvg,
  NavUserSvgAndNameWrapper,
  NavUserWrapper,
} from "../Navigation/Navigation.styled";
import { Modal } from "@mui/material";
import { FormComponent } from "../FormComponent/FormComponent";
import { useLocation } from "react-router-dom";
import Icons from "../../img/icons.svg";
import { logOut } from "../../js/getBabysittersListDB";

export const Navigation = ({ isLoggedIn }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLogInOrReg, setIsLogInOrReg] = useState("logIn");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

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
  const handleLogOut = async () => {
    logOut();
  };

  return (
    <>
      <NavContainer>
        <NavStyled $currentPath={currentPath}>
          <Logo to="/">Nanny.Services</Logo>

          <NavListPages>
            <NavListPagesItem>
              <NavListPagesLink to="/">Home</NavListPagesLink>
            </NavListPagesItem>
            <NavListPagesItem>
              <NavListPagesLink to="/catalog">Nannies</NavListPagesLink>
            </NavListPagesItem>
            {isLoggedIn && (
              <NavListPagesItem>
                <NavListPagesLink to="/favorities">Favorities</NavListPagesLink>
              </NavListPagesItem>
            )}
          </NavListPages>
          {isLoggedIn ? (
            <NavUserWrapper>
              <NavUserSvgAndNameWrapper>
                <NavUserIconWrapper>
                  <NavUserSvg>
                    <use href={`${Icons}#icon-user`} />
                  </NavUserSvg>
                </NavUserIconWrapper>
                <NavUserName></NavUserName>
              </NavUserSvgAndNameWrapper>

              <NavBtnLogOut onClick={handleLogOut}>Log out</NavBtnLogOut>
            </NavUserWrapper>
          ) : (
            <NavListBtns>
              <NavListBtnsItem>
                <NavBtnLogIn onClick={handleOpenModalLogIn}>Log In</NavBtnLogIn>
              </NavListBtnsItem>
              <NavListBtnsItem>
                <NavBtnReg
                  onClick={handleOpenModalReg}
                  $currentPath={currentPath}
                >
                  Registration
                </NavBtnReg>
              </NavListBtnsItem>
            </NavListBtns>
          )}
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
