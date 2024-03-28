import styled from "styled-components";
import { Container } from "../Container/Container";
import ImageHero from "../../img/hero-image.png";

export const ContainerHero = styled(Container)`
  position: relative;
  padding: 0 96px;
  margin-top: 32px;
  margin-bottom: 32px;

  background: linear-gradient(to right, #f03f3b 50%, transparent 50%),
    url(${ImageHero}) no-repeat left;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 30px;

  &::before {
    content: "";
    top: 88px;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 1px;

    background-color: rgba(251, 251, 251, 0.4);
  }
`;

export const HeroWrapper = styled.div``;

export const HeroTextWrapper = styled.div`
  padding-top: 251px;
  padding-bottom: 163px;
  max-width: 522px;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 28px;

  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #fbfbfb;
`;

export const HeroSubtitle = styled.p`
  margin-bottom: 64px;

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

  &:hover {
    & > svg {
      transform: rotate(53deg);
    }
  }
`;

export const HeroBtnSvg = styled.svg`
  margin-left: 18px;
  width: 15px;
  height: 17px;
  transition: transform 250ms linear;
`;

export const HeroExperienceWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  max-width: 284px;
  gap: 16px;
  padding: 32px;
  border-radius: 13px;
  background-color: #fbfbfb;
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
  margin-bottom: 6px;

  font-weight: 400;
  font-size: 16px;
  color: rgba(17, 16, 28, 0.5);
`;

export const HeroExperienceNumber = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #11101c;
`;
