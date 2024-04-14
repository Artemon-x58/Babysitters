import PropTypes from "prop-types";
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
  CatalogItemPropertiesBetweenSpan,
} from "./CatalogItem.styled";
import Icons from "../../img/icons.svg";
import moment from "moment";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { addFavorities } from "../../redux/favorities/favoritiesOperations";

export const CatalogItem = ({ babysitter }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleAddToFavorities = (e) => {
    const itemId = e.currentTarget.id;

    dispatch(addFavorities({ userId: user.id, itemId }));
  };
  const handleReadMore = () => setIsReadMore(true);

  const {
    id,
    name,
    avatar_url,
    location,
    rating,
    price_per_hour,
    birthday,
    experience,
    kids_age,
    characters,
    education,
    about,
    reviews,
  } = babysitter;

  return (
    <CatalogItemStyled id={id}>
      <CatalogItemImgWrapper>
        <CatalogItemImg src={avatar_url} />
      </CatalogItemImgWrapper>
      <CatalogItemMainWrapper>
        <CatalogItemProffesionWrapper>
          <CatalogItemProffesion>Nanny</CatalogItemProffesion>
          <CatalogItemPropertiesWrapper>
            <CatalogItemPropertiesText>
              <CatalogItemLocationSvg>
                <use href={`${Icons}#icon-location`} />
              </CatalogItemLocationSvg>
              {location}
            </CatalogItemPropertiesText>
            <CatalogItemPropertiesBetweenSpan>
              |
            </CatalogItemPropertiesBetweenSpan>
            <CatalogItemPropertiesText>
              <CatalogItemRatingSvg>
                <use href={`${Icons}#icon-star`} />
              </CatalogItemRatingSvg>
              Rating: {rating}
            </CatalogItemPropertiesText>
            <CatalogItemPropertiesBetweenSpan>
              |
            </CatalogItemPropertiesBetweenSpan>
            <CatalogItemPropertiesText>
              Price / 1hour:
              <CatalogItemPriceSpan>{price_per_hour}$</CatalogItemPriceSpan>
            </CatalogItemPropertiesText>
          </CatalogItemPropertiesWrapper>
          <CatalogItemBtnHeart
            id={id}
            type="button"
            onClick={handleAddToFavorities}
          >
            <CatalogItemHeartSvg>
              <use href={`${Icons}#icon-heart`} />
            </CatalogItemHeartSvg>
          </CatalogItemBtnHeart>
        </CatalogItemProffesionWrapper>

        <CatalogItemName>{name}</CatalogItemName>
        <CatalogItemListInfo>
          <CatalogItemInfo
            label="Age"
            value={moment().diff(moment(birthday), "years")}
          />
          <CatalogItemInfo label="Experience" value={experience} />
          <CatalogItemInfo label="Kids Age" value={kids_age} />
          <CatalogItemInfo
            label="Characters"
            value={characters
              .map(
                (character) =>
                  character.charAt(0).toUpperCase() + character.slice(1)
              )
              .join(", ")}
          />
          <CatalogItemInfo label="Education" value={education} />
        </CatalogItemListInfo>
        <CatalogItemSubtitle>{about}</CatalogItemSubtitle>
        {isReadMore ? (
          <ReviewsList reviews={reviews} avatar={avatar_url} name={name} />
        ) : (
          <CatalogItemButton type="button" onClick={() => handleReadMore()}>
            Read more
          </CatalogItemButton>
        )}
      </CatalogItemMainWrapper>
    </CatalogItemStyled>
  );
};

CatalogItem.propTypes = {
  babysitter: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price_per_hour: PropTypes.number.isRequired,
    birthday: PropTypes.string.isRequired,
    experience: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    kids_age: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    characters: PropTypes.arrayOf(PropTypes.string).isRequired,
    education: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};
