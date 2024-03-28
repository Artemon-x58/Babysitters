import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormBtn,
  FormInput,
  FormStyled,
  FormSubtitle,
  FormSvgCross,
  FormTitle,
  FormWrapper,
  FormWrapperInputs,
} from "./FormComponent.styled";
import Icons from "../../img/icons.svg";
import PropTypes from "prop-types";

export const FormComponent = ({ onClose, isLogInOrReg }) => {
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
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .matches(/^[a-zA-Z]+$/, "Name must contain only Latin characters"),
          email: Yup.string()
            .required("Email is required")
            .matches(
              /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
              "Invalid email address"
            ),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              "Password must contain at least 8 characters, including one letter and one number"
            ),
        })}
      >
        <FormStyled>
          <FormWrapperInputs>
            {isLogInOrReg === "registration" && (
              <FormInput id="name" name="name" placeholder="Name" />
            )}
            <FormInput id="email" name="email" placeholder="Email" />
            <FormInput id="password" name="password" placeholder="Password" />
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
