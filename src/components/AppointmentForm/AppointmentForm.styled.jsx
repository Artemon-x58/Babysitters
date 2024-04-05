import styled from "styled-components";
import { FormWrapper } from "../FormComponent/FormComponent.styled";

export const AppointmentFormWrapper = styled(FormWrapper)``;

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

export const AppointmentFormBtn = styled.button`
  border-radius: 30px;
  padding: 16px 217px;
  width: 100%;
  height: 52px;
  background: #f03f3b;
  border: none;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;
