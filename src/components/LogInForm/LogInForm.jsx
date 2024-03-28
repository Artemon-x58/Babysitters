import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormLogInSvgCross,
  FormStyled,
  LogInFormBtn,
  LogInFormInput,
  LogInFormSubtitle,
  LogInFormTitle,
  LogInFormWrapper,
  LogInFormWrapperInputs,
} from "./LogInForm.styled";
import Icons from "../../img/icons.svg";
import PropTypes from "prop-types";

export const LogInForm = ({ onClose }) => {
  return (
    <LogInFormWrapper>
      <FormLogInSvgCross onClick={onClose}>
        <use href={`${Icons}#icon-cross`} />
      </FormLogInSvgCross>
      <LogInFormTitle>Log In</LogInFormTitle>
      <LogInFormSubtitle>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </LogInFormSubtitle>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
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
          <LogInFormWrapperInputs>
            <LogInFormInput id="email" name="email" placeholder="Email" />
            <LogInFormInput
              id="password"
              name="password"
              placeholder="Password"
            />
          </LogInFormWrapperInputs>

          <LogInFormBtn type="submit">Log In</LogInFormBtn>
        </FormStyled>
      </Formik>
    </LogInFormWrapper>
  );
};

LogInForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
