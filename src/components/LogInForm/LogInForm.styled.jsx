import { Field, Form } from "formik";
import styled from "styled-components";

export const LogInFormWrapper = styled.div`
  padding: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  max-width: 438px;
  background: #fbfbfb;
`;

export const FormStyled = styled(Form)``;

export const FormLogInSvgCross = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  stroke: #11101c;
`;

export const LogInFormTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
`;

export const LogInFormSubtitle = styled.p`
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;

export const LogInFormWrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 40px;
`;

export const LogInFormInput = styled(Field)`
  padding: 16px 18px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #11101c;
`;

export const LogInFormBtn = styled.button`
  border-radius: 30px;
  padding: 16px 196px;
  width: 100%;
  height: 52px;
  border-radius: 30px;
  border: none;
  background: #f03f3b;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;
