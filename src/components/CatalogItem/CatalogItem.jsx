import { CatalogItemInfo } from "../CatalogItemInfo/CatalogItemInfo";
import {
  CatalogItemBtnHeart,
  CatalogItemButton,
  CatalogItemHeartSvg,
  CatalogItemImg,
  CatalogItemImgWrapper,
  CatalogItemListInfo,
  CatalogItemLocationSvg,
  CatalogItemMainWrapper,
  CatalogItemName,
  CatalogItemPriceSpan,
  CatalogItemProffesion,
  CatalogItemProffesionWrapper,
  CatalogItemPropertiesText,
  CatalogItemPropertiesWrapper,
  CatalogItemRatingSvg,
  CatalogItemStyled,
  CatalogItemSubtitle,
} from "./CatalogItem.styled";
import Icons from "../../img/icons.svg";
import moment from "moment";

export const CatalogItem = ({ babysitter }) => {
  return (
    <CatalogItemStyled id={babysitter.birthday}>
      <CatalogItemImgWrapper>
        <CatalogItemImg src={babysitter.avatar_url} />
      </CatalogItemImgWrapper>
      <CatalogItemMainWrapper>
        <CatalogItemProffesionWrapper>
          <CatalogItemProffesion>Nanny</CatalogItemProffesion>
          <CatalogItemPropertiesWrapper>
            <CatalogItemPropertiesText>
              <CatalogItemLocationSvg>
                <use href={`${Icons}#icon-location`} />
              </CatalogItemLocationSvg>
              {babysitter.location}
            </CatalogItemPropertiesText>
            <CatalogItemPropertiesText>
              <CatalogItemRatingSvg>
                <use href={`${Icons}#icon-star`} />
              </CatalogItemRatingSvg>
              Rating: {babysitter.rating}
            </CatalogItemPropertiesText>
            <CatalogItemPropertiesText>
              Price/1hour:{" "}
              <CatalogItemPriceSpan>
                {babysitter.price_per_hour}$
              </CatalogItemPriceSpan>
            </CatalogItemPropertiesText>
          </CatalogItemPropertiesWrapper>
          <CatalogItemBtnHeart>
            <CatalogItemHeartSvg>
              <use href={`${Icons}#icon-heart`} />
            </CatalogItemHeartSvg>
          </CatalogItemBtnHeart>
        </CatalogItemProffesionWrapper>

        <CatalogItemName>{babysitter.name}</CatalogItemName>
        <CatalogItemListInfo>
          <CatalogItemInfo
            label="Age"
            value={moment().diff(moment(babysitter.birthday), "years")}
          />
          <CatalogItemInfo label="Experience" value={babysitter.experience} />
          <CatalogItemInfo label="Kids Age" value={babysitter.kids_age} />
          <CatalogItemInfo
            label="Characters"
            value={babysitter.characters
              .map(
                (character) =>
                  character.charAt(0).toUpperCase() + character.slice(1)
              )
              .join(", ")}
          />
          <CatalogItemInfo label="Education" value={babysitter.education} />
        </CatalogItemListInfo>
        <CatalogItemSubtitle>{babysitter.about}</CatalogItemSubtitle>
        <CatalogItemButton type="button">Read more</CatalogItemButton>
      </CatalogItemMainWrapper>
    </CatalogItemStyled>
  );
};
