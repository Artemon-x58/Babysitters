import PropTypes from "prop-types";
import {
  ReviewsItemInitials,
  ReviewsItemInitialsWrapper,
  ReviewsItemMainWrapper,
  ReviewsItemName,
  ReviewsItemNameWrapper,
  ReviewsItemRating,
  ReviewsItemRatingWrapper,
  ReviewsItemStyled,
  ReviewsItemSvg,
  ReviewsItemText,
} from "./ReviewsItem.styled";

import Icons from "../../img/icons.svg";

export const ReviewsItem = ({ review }) => {
  return (
    <ReviewsItemStyled>
      <ReviewsItemMainWrapper>
        <ReviewsItemInitialsWrapper>
          <ReviewsItemInitials>{review.reviewer[0]}</ReviewsItemInitials>
        </ReviewsItemInitialsWrapper>
        <ReviewsItemNameWrapper>
          <ReviewsItemName>{review.reviewer}</ReviewsItemName>
          <ReviewsItemRatingWrapper>
            <ReviewsItemSvg>
              <use href={`${Icons}#icon-star`} />
            </ReviewsItemSvg>
            <ReviewsItemRating>{review.rating}</ReviewsItemRating>
          </ReviewsItemRatingWrapper>
        </ReviewsItemNameWrapper>
      </ReviewsItemMainWrapper>

      <ReviewsItemText>{review.comment}</ReviewsItemText>
    </ReviewsItemStyled>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    reviewer: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};
