import { useDispatch, useSelector } from "react-redux";
import { CatalogListBtn, CatalogListStyled } from "./CatalogList.styled";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Container } from "../Container/Container";
import { SelectComponent } from "../Select/SelectComponent";
import { useEffect, useState } from "react";
import { fetchCatalog } from "../../redux/catalog/catalogOperations";
import { selectCatalog } from "../../redux/catalog/catalogSelectors";
import { selectFilter } from "../../redux/filter/filterSelectors";
import { sortedCatalog } from "../../js/sortedCatalog";

export const CatalogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const itemsPerPage = 3;
  const catalog = useSelector(selectCatalog);
  const filter = useSelector(selectFilter);
  useEffect(() => {
    dispatch(fetchCatalog({ currentPage, itemsPerPage, filter }));
  }, [currentPage, dispatch, filter]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const newCatalog = sortedCatalog(catalog)[filter];

  return (
    <Container>
      <SelectComponent />
      <CatalogListStyled>
        {newCatalog.map((babysitter, index) => (
          <CatalogItem key={index} babysitter={babysitter} />
        ))}
      </CatalogListStyled>
      <CatalogListBtn onClick={handleNextPage}>Load more</CatalogListBtn>
    </Container>
  );
};
