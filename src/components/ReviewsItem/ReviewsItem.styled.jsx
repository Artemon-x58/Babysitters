import styled from "styled-components";

export const ReviewsItemStyled = styled.li``;

export const ReviewsItemMainWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ReviewsItemInitialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;

  background: rgba(240, 63, 59, 0.2);
`;

export const ReviewsItemInitials = styled.p`
  font-size: 20px;
  line-height: 100%;
  color: #f03f3b;
`;

export const ReviewsItemNameWrapper = styled.div``;

export const ReviewsItemName = styled.h3`
  margin-bottom: 4px;

  font-size: 16px;
  line-height: 125%;
  color: #11101c;
`;

export const ReviewsItemSvg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const ReviewsItemRatingWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ReviewsItemRating = styled.p`
  font-size: 14px;
  line-height: 129%;
  color: #11101c;
`;

export const ReviewsItemText = styled.p`
  margin-bottom: 48px;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;
