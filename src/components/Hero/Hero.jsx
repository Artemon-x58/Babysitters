import {
  ContainerHero,
  HeroBtn,
  HeroBtnSvg,
  HeroExperienceNumber,
  HeroExperienceSvg,
  HeroExperienceSvgWrapper,
  HeroExperienceText,
  HeroExperienceWrapper,
  HeroSubtitle,
  HeroTextWrapper,
  HeroTitle,
  HeroWrapper,
} from "./Hero.styled";
import Icons from "../../img/icons.svg";

export const Hero = () => {
  return (
    <ContainerHero>
      <HeroWrapper>
        <HeroTextWrapper>
          <HeroTitle>Make Life Easier for the Family:</HeroTitle>
          <HeroSubtitle>Find Babysitters Online for All Occasions</HeroSubtitle>
          <HeroBtn>
            Get started
            <HeroBtnSvg>
              <use href={`${Icons}#icon-arrow`} />
            </HeroBtnSvg>
          </HeroBtn>
        </HeroTextWrapper>

        <HeroExperienceWrapper>
          <HeroExperienceSvgWrapper>
            <HeroExperienceSvg>
              <use href={`${Icons}#icon-check`} />
            </HeroExperienceSvg>
          </HeroExperienceSvgWrapper>
          <div>
            <HeroExperienceText>Experienced nannies</HeroExperienceText>
            <HeroExperienceNumber>15,000</HeroExperienceNumber>
          </div>
        </HeroExperienceWrapper>
      </HeroWrapper>
    </ContainerHero>
  );
};
