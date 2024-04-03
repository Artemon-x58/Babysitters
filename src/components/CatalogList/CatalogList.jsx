import { CatalogListStyled } from "./CatalogList.styled";

import data from "../../data.json";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Container } from "../Container/Container";

export const CatalogList = () => {
  return (
    <Container>
      <CatalogListStyled>
        {data.map((babysitter, index) => (
          <CatalogItem key={index} babysitter={babysitter} />
        ))}
      </CatalogListStyled>
    </Container>
  );
};
