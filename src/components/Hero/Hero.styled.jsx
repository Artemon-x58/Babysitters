import styled from "styled-components";

export const HeroTitle = styled.h1`
  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #fbfbfb;
`;

export const HeroSubtitle = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 107%;
  letter-spacing: -0.02em;
  color: #fbfbfb;
`;

export const HeroBtn = styled.button`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 18px 50px;
  min-width: 230px;
  height: 60px;
  background: transparent;

  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;

export const HeroBtnSvg = styled.svg`
  width: 15px;
  height: 17px;
`;

export const HeroExperienceWrapper = styled.div`
  width: 284px;
  height: 118px;
  border-radius: 13px;
`;

export const HeroExperienceSvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: #f03f3b;
`;

export const HeroExperienceSvg = styled.svg`
  width: 30px;
  height: 30px;
`;

export const HeroExperienceText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: rgba(17, 16, 28, 0.5);
`;

export const HeroExperienceNumber = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #11101c;
`;
