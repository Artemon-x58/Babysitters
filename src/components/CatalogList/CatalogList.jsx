import { CatalogListStyled } from "./CatalogList.styled";

import data from "../../data.json";
import { CatalogItem } from "../CatalogItem/CatalogItem";

export const CatalogList = () => {
  return (
    <CatalogListStyled>
      {data.map((babysitter, index) => (
        <CatalogItem key={index} babysitter={babysitter} />
      ))}
    </CatalogListStyled>
  );
};
