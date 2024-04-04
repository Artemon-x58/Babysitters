import { CatalogListStyled } from "./CatalogList.styled";

import data from "../../data.json";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Container } from "../Container/Container";
import { SelectComponent } from "../Select/SelectComponent";

export const CatalogList = () => {
  return (
    <Container>
      <SelectComponent />
      <CatalogListStyled>
        {data.map((babysitter, index) => (
          <CatalogItem key={index} babysitter={babysitter} />
        ))}
      </CatalogListStyled>
    </Container>
  );
};
