import PropTypes from "prop-types";
import { ReviewsItem } from "../ReviewsItem/ReviewsItem";
import { ReviewsListBtn, ReviewsListStyled } from "./ReviewsList.styled";

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsListStyled>
      {reviews.map((review, index) => (
        <ReviewsItem key={index} review={review} />
      ))}
      <ReviewsListBtn type="button">Make an appointment</ReviewsListBtn>
    </ReviewsListStyled>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
