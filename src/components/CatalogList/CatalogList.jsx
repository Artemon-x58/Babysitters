import { useDispatch, useSelector } from "react-redux";
import { CatalogListBtn, CatalogListStyled } from "./CatalogList.styled";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Container } from "../Container/Container";
import { SelectComponent } from "../Select/SelectComponent";
import { useEffect, useState } from "react";
import { fetchCatalog } from "../../redux/catalog/catalogOperations";
import { selectCatalog } from "../../redux/catalog/catalogSelectors";

export const CatalogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(fetchCatalog({ currentPage, itemsPerPage }));
  }, [currentPage, dispatch]);

  const catalog = useSelector(selectCatalog);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Container>
      <SelectComponent />
      <CatalogListStyled>
        {catalog.map((babysitter, index) => (
          <CatalogItem key={index} babysitter={babysitter} />
        ))}
      </CatalogListStyled>
      <CatalogListBtn onClick={handleNextPage}>Load more</CatalogListBtn>
    </Container>
  );
};
