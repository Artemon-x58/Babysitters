import PropTypes from "prop-types";
import { ReviewsItem } from "../ReviewsItem/ReviewsItem";
import { ReviewsListBtn, ReviewsListStyled } from "./ReviewsList.styled";
import { Modal } from "@mui/material";
import { useState } from "react";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

export const ReviewsList = ({ reviews, avatar, name }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <ReviewsListStyled>
      {reviews.map((review, index) => (
        <ReviewsItem key={index} review={review} />
      ))}
      <ReviewsListBtn type="button" onClick={handleOpenModal}>
        Make an appointment
      </ReviewsListBtn>
      <Modal open={isOpenModal} onClose={handleCloseModal}>
        <div>
          <AppointmentForm
            avatar={avatar}
            name={name}
            onClose={handleCloseModal}
          />
        </div>
      </Modal>
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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
