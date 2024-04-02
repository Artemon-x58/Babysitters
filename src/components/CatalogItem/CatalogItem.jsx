import { CatalogItemInfo } from "../CatalogItemInfo/CatalogItemInfo";
import {
  CatalogItemImg,
  CatalogItemImgWrapper,
  CatalogItemListInfo,
  CatalogItemLocationSvg,
  CatalogItemName,
  CatalogItemProffesion,
  CatalogItemPropertiesText,
  CatalogItemPropertiesWrapper,
  CatalogItemRatingSvg,
  CatalogItemStyled,
} from "./CatalogItem.styled";

export const CatalogItem = ({ babysitter }) => {
  return (
    <CatalogItemStyled id={babysitter.birthday}>
      <CatalogItemImgWrapper>
        <CatalogItemImg src={babysitter.avatar_url} />
      </CatalogItemImgWrapper>
      <CatalogItemProffesion>Nanny</CatalogItemProffesion>
      <CatalogItemPropertiesWrapper>
        <CatalogItemPropertiesText>
          <CatalogItemLocationSvg>
            <use />
          </CatalogItemLocationSvg>
          {babysitter.location}
        </CatalogItemPropertiesText>
        <CatalogItemPropertiesText>
          <CatalogItemRatingSvg>
            <use />
          </CatalogItemRatingSvg>
          Rating: {babysitter.rating}
        </CatalogItemPropertiesText>
        <CatalogItemPropertiesText>
          Price/1hour: {babysitter.price_per_hour}
        </CatalogItemPropertiesText>
      </CatalogItemPropertiesWrapper>
      <CatalogItemName>{babysitter.name}</CatalogItemName>
      <CatalogItemListInfo>
        <CatalogItemInfo label="Age" value={babysitter.birthday} />
        <CatalogItemInfo label="Experience" value={babysitter.experience} />
        <CatalogItemInfo label="Kids Age" value={babysitter.kids_age} />
        <CatalogItemInfo label="Characters" value={babysitter.characters} />
        <CatalogItemInfo label="education" value={babysitter.education} />
      </CatalogItemListInfo>
    </CatalogItemStyled>
  );
};
