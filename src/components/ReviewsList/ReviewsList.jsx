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
