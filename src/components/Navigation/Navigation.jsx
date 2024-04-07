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
import { useDispatch, useSelector } from "react-redux";
import Icons from "../../img/icons.svg";
import { logOut } from "../../redux/auth/authOperations";
import { useAuth } from "../../hooks/useAuth";
import { selectUser } from "../../redux/auth/authSelectors";

export const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLogInOrReg, setIsLogInOrReg] = useState("logIn");

  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
    dispatch(logOut());
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
                <NavUserName>{user.name}</NavUserName>
              </NavUserSvgAndNameWrapper>

              <NavBtnLogOut type="button" onClick={handleLogOut}>
                Log out
              </NavBtnLogOut>
            </NavUserWrapper>
          ) : (
            <NavListBtns>
              <NavListBtnsItem>
                <NavBtnLogIn type="button" onClick={handleOpenModalLogIn}>
                  Log In
                </NavBtnLogIn>
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
