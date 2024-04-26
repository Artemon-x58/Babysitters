import PropTypes from "prop-types";
import "react-datetime/css/react-datetime.css";
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
  AppointmentFormWrapperGrid,
  FormInputAppointment,
  AppointmentFormInputsWrapper,
  AppointmentFormErrorWrapper,
  AppointmentFormCustomErrorMessage,
} from "./AppointmentForm.styled";
import { ErrorMessage, Field, Formik } from "formik";
import Icons from "../../img/icons.svg";
import {
  FormStyled,
  FormSvgCross,
} from "../FormComponent/FormComponent.styled";
import { TimePicker } from "../Timepicker/Timepicker";
import { appointmentSchema } from "../../js/validationSchema";

export const AppointmentForm = ({ avatar, name, onClose }) => {
  const handleOnSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    onClose();
  };

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
        validationSchema={appointmentSchema}
        onSubmit={handleOnSubmit}
      >
        <FormStyled>
          <AppointmentFormWrapperGrid>
            <AppointmentFormErrorWrapper>
              <FormInputAppointment
                id="address"
                name="address"
                placeholder="Address"
              />
              <ErrorMessage
                name="address"
                component={AppointmentFormCustomErrorMessage}
              />
            </AppointmentFormErrorWrapper>
            <AppointmentFormErrorWrapper>
              <FormInputAppointment
                id="number"
                name="number"
                placeholder="+380"
              />
              <ErrorMessage
                name="number"
                component={AppointmentFormCustomErrorMessage}
              />
            </AppointmentFormErrorWrapper>
            <AppointmentFormErrorWrapper>
              <FormInputAppointment
                id="age"
                name="age"
                placeholder="Child's age"
              />
              <ErrorMessage
                name="age"
                component={AppointmentFormCustomErrorMessage}
              />
            </AppointmentFormErrorWrapper>
            <AppointmentFormErrorWrapper>
              <Field name="time">
                {({ field, form }) => (
                  <TimePicker
                    value={field.value}
                    onChange={(option) => {
                      form.setFieldValue(field.name, option.value);
                    }}
                  />
                )}
              </Field>
            </AppointmentFormErrorWrapper>
          </AppointmentFormWrapperGrid>
          <AppointmentFormInputsWrapper>
            <AppointmentFormErrorWrapper>
              <FormInputAppointment
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component={AppointmentFormCustomErrorMessage}
              />
            </AppointmentFormErrorWrapper>
            <AppointmentFormErrorWrapper>
              <FormInputAppointment
                id="parent"
                name="parent"
                placeholder="Father's or mother's name"
              />
              <ErrorMessage
                name="parent"
                component={AppointmentFormCustomErrorMessage}
              />
            </AppointmentFormErrorWrapper>
            <Field name="comment">
              {({ field }) => (
                <FormInputAppointment
                  as="textarea"
                  id="comment"
                  name="comment"
                  placeholder="Comment"
                  {...field}
                />
              )}
            </Field>
          </AppointmentFormInputsWrapper>

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
