import { ErrorMessage, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  CustomErrorMessage,
  ErrorWrapper,
  FormBtn,
  FormInput,
  FormPasswordSvg,
  FormStyled,
  FormSubtitle,
  FormSvgCross,
  FormTitle,
  FormWrapper,
  FormWrapperInputs,
} from "./FormComponent.styled";
import Icons from "../../img/icons.svg";
import PropTypes from "prop-types";
import {
  signInValidationSchema,
  signUpValidationSchema,
} from "../../js/validationSchema";
import { register, signIn } from "../../redux/auth/authOperations";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const FormComponent = ({ onClose, isLogInOrReg }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState("eye-off");

  const dispatch = useDispatch();

  const notify = () => {
    toast.error(
      "Email already in use. Please use a different email or log in."
    );
  };

  const handlePasswordVisible = () => {
    if (passwordIsVisible === "eye") {
      setPasswordIsVisible("eye-off");
    } else {
      setPasswordIsVisible("eye");
    }
  };

  const handleOnSubmit = (values, { resetForm }) => {
    if (isLogInOrReg === "logIn") {
      dispatch(signIn(values));
    } else {
      notify();
      dispatch(register(values));
    }

    resetForm();
    onClose();
  };
  return (
    <FormWrapper>
      <FormSvgCross onClick={onClose}>
        <use href={`${Icons}#icon-cross`} />
      </FormSvgCross>
      <FormTitle>
        {isLogInOrReg === "registration" ? "Registration" : "Log In"}
      </FormTitle>
      <FormSubtitle>
        {isLogInOrReg === "registration"
          ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
          : "Welcome back! Please enter your credentials to access your account and continue your babysitter search."}
      </FormSubtitle>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={
          isLogInOrReg === "logIn"
            ? signInValidationSchema
            : signUpValidationSchema
        }
        onSubmit={handleOnSubmit}
      >
        <FormStyled>
          <FormWrapperInputs>
            {isLogInOrReg === "registration" && (
              <ErrorWrapper>
                <FormInput id="name" name="name" placeholder="Name" />
                <ErrorMessage name="name" component={CustomErrorMessage} />
              </ErrorWrapper>
            )}
            <ErrorWrapper>
              <FormInput id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={CustomErrorMessage} />
            </ErrorWrapper>
            <ErrorWrapper>
              <label name="password">
                <FormPasswordSvg onClick={handlePasswordVisible}>
                  <use href={`${Icons}#icon-${passwordIsVisible}`} />
                </FormPasswordSvg>
              </label>
              <FormInput
                type={passwordIsVisible === "eye-off" ? "password" : "text"}
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component={CustomErrorMessage} />
            </ErrorWrapper>
          </FormWrapperInputs>

          <FormBtn type="submit">
            {isLogInOrReg === "registration" ? "Sign Up" : "Log In"}
          </FormBtn>
        </FormStyled>
      </Formik>
    </FormWrapper>
  );
};

FormComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  isLogInOrReg: PropTypes.string,
};
