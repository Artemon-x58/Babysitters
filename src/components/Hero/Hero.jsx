import { Container } from "../Container/Container";
import {
  HeroBtn,
  HeroBtnSvg,
  HeroExperienceNumber,
  HeroExperienceSvg,
  HeroExperienceSvgWrapper,
  HeroExperienceText,
  HeroExperienceWrapper,
  HeroSubtitle,
  HeroTitle,
} from "./Hero.styled";
import Icons from "../../img/icons.svg";

export const Hero = () => {
  return (
    <Container>
      <HeroTitle>Make Life Easier for the Family:</HeroTitle>
      <HeroSubtitle>Find Babysitters Online for All Occasions</HeroSubtitle>
      <HeroBtn>
        Get started
        <HeroBtnSvg>
          <use href={`${Icons}#icon-arrow`} />
        </HeroBtnSvg>
      </HeroBtn>
      <HeroExperienceWrapper>
        <HeroExperienceSvgWrapper>
          <HeroExperienceSvg>
            <use href={`${Icons}#icon-check`} />
          </HeroExperienceSvg>
        </HeroExperienceSvgWrapper>
        <HeroExperienceText>Experienced nannies</HeroExperienceText>
        <HeroExperienceNumber>15,000</HeroExperienceNumber>
      </HeroExperienceWrapper>
    </Container>
  );
};
