import { useDispatch, useSelector } from "react-redux";
import { CatalogListBtn, CatalogListStyled } from "./CatalogList.styled";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Container } from "../Container/Container";
import { SelectComponent } from "../Select/SelectComponent";
import { useEffect, useState } from "react";
import { fetchCatalog } from "../../redux/catalog/catalogOperations";
import {
  selectCatalog,
  selectIsLoading,
} from "../../redux/catalog/catalogSelectors";
import { selectFilter } from "../../redux/filter/filterSelectors";
import { sortedCatalog } from "../../js/sortedCatalog";
import { Oval } from "react-loader-spinner";

export const CatalogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const itemsPerPage = 3;
  const catalog = useSelector(selectCatalog);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchCatalog({ currentPage, itemsPerPage, filter }));
  }, [currentPage, dispatch, filter]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const newCatalog = sortedCatalog(catalog)[filter];

  const wrapperStyle = {
    justifyContent: "center",
  };

  return (
    <Container>
      {isLoading ? (
        <Oval
          color="#f03f3b"
          secondaryColor="transparent"
          style={{ justifyContent: "center" }}
          wrapperStyle={wrapperStyle}
        />
      ) : (
        <>
          <SelectComponent />
          <CatalogListStyled>
            {newCatalog.map((babysitter, index) => (
              <CatalogItem key={index} babysitter={babysitter} />
            ))}
          </CatalogListStyled>
          <CatalogListBtn onClick={handleNextPage}>Load more</CatalogListBtn>
        </>
      )}
    </Container>
  );
};
