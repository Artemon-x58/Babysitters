import { Field, Form } from "formik";
import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 64px;
  transform: translate(-50%, -50%);
  height: auto;
  border-radius: 30px;
  width: 40%;
  background: #fbfbfb;
`;

export const FormStyled = styled(Form)`
  overflow-y: auto;
`;

export const FormSvgCross = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  stroke: #11101c;
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
`;

export const FormSubtitle = styled.p`
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;

export const FormWrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 40px;
`;

export const FormInput = styled(Field)`
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;

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

export const FormPasswordSvg = styled.svg`
  position: absolute;
  right: 16px;
  top: 16px;

  width: 20px;
  height: 20px;
  fill: transparent;
  stroke: #11101c;
`;

export const FormBtn = styled.button`
  border-radius: 30px;
  padding: 16px 190px;
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

export const ErrorWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const CustomErrorMessage = styled.p`
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: red;
`;
