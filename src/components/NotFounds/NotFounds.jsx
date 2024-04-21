import {
  NotFoundsLink,
  NotFoundsText,
  NotFoundsWrapper,
} from "./NotFounds.styled";

export const NotFounds = () => {
  return (
    <NotFoundsWrapper>
      <NotFoundsText>
        You don&apos;t have any babysitters in your favorites. You can add them
        in the <NotFoundsLink to="/catalog">catalog</NotFoundsLink>
      </NotFoundsText>
    </NotFoundsWrapper>
  );
};
