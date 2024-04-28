import { Field } from "formik";
import styled from "styled-components";

export const AppointmentFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;

  width: 40%;
  border-radius: 30px;
  height: auto;
  overflow-y: auto;
  background: #fbfbfb;
`;

export const AppointmentFormTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
`;

export const AppointmentFormSubtitle = styled.p`
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;

export const AppointmentFormWrapperNanny = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const AppointmentFormImg = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`;

export const AppointmentFormNameWrapper = styled.div``;

export const AppointmentFormProffesion = styled.p`
  margin-bottom: 4px;

  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
`;

export const AppointmentFormName = styled.h3`
  font-size: 16px;
  line-height: 150%;
  color: #11101c;
`;

export const AppointmentFormWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  column-gap: 8px;
  row-gap: 16px;
  margin-bottom: 16px;
`;

export const AppointmentFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;

  & textarea {
    height: 116px;
  }
`;

export const FormInputAppointment = styled(Field)`
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  background-color: #fbfbfb;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #11101c;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #11101c;
  }
`;

export const AppointmentFormBtn = styled.button`
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  height: 52px;
  background: #f03f3b;
  border: none;
  transition: color 250ms linear, background-color 250ms linear;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;

  &:hover {
    background-color: #fbfbfb;
    color: #f03f3b;
  }
`;

export const AppointmentFormErrorWrapper = styled.div`
  /* position: relative; */
  /* width: 100%; */
  /* display: flex; */
  /* flex-wrap: wrap; */
`;

export const AppointmentFormCustomErrorMessage = styled.p`
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: red;
`;
