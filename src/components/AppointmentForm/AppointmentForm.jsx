import PropTypes from "prop-types";
import {
  AppointmentFormBtn,
  AppointmentFormImg,
  AppointmentFormName,
  AppointmentFormNameWrapper,
  AppointmentFormProffesion,
  AppointmentFormSubtitle,
  AppointmentFormTitle,
  AppointmentFormWrapper,
  AppointmentFormWrapperNanny,
} from "./AppointmentForm.styled";
import { Formik } from "formik";
import Icons from "../../img/icons.svg";
import {
  FormInput,
  FormStyled,
  FormSvgCross,
} from "../FormComponent/FormComponent.styled";

export const AppointmentForm = ({ avatar, name, onClose }) => {
  return (
    <AppointmentFormWrapper>
      <FormSvgCross onClick={onClose}>
        <use href={`${Icons}#icon-cross`} />
      </FormSvgCross>
      <AppointmentFormTitle>
        Make an appointment with a babysitter
      </AppointmentFormTitle>
      <AppointmentFormSubtitle>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </AppointmentFormSubtitle>
      <AppointmentFormWrapperNanny>
        <AppointmentFormImg src={avatar} />
        <AppointmentFormNameWrapper>
          <AppointmentFormProffesion>Your nanny</AppointmentFormProffesion>
          <AppointmentFormName>{name}</AppointmentFormName>
        </AppointmentFormNameWrapper>
      </AppointmentFormWrapperNanny>
      <Formik
        initialValues={{
          address: "",
          number: "",
          age: "",
          time: "",
          email: "",
          parent: "",
          comment: "",
        }}
      >
        <FormStyled>
          <FormInput id="address" name="address" placeholder="Address" />
          <FormInput id="number" name="number" placeholder="+380" />
          <FormInput id="age" name="age" placeholder="Child's age" />
          <FormInput id="email" name="email" placeholder="Email" />
          <FormInput
            id="parent"
            name="parent"
            placeholder="Father's or mother's name"
          />
          <FormInput id="comment" name="comment" placeholder="Comment" />
          <AppointmentFormBtn type="submit">Send</AppointmentFormBtn>
        </FormStyled>
      </Formik>
    </AppointmentFormWrapper>
  );
};

AppointmentForm.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
