import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CatalogListBtn, CatalogListStyled } from "./CatalogList.styled";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Container } from "../Container/Container";
import { useEffect, useState } from "react";
import { fetchCatalog } from "../../redux/catalog/catalogOperations";
import {
  selectCatalog,
  selectCatalogLength,
  selectIsLoading,
} from "../../redux/catalog/catalogSelectors";
import { selectFilter } from "../../redux/filter/filterSelectors";
import { sortedCatalog } from "../../js/sortedCatalog";
import { Oval } from "react-loader-spinner";
import { fetchFavorities } from "../../redux/favorities/favoritiesOperations";
import { selectUser } from "../../redux/auth/authSelectors";
import { selectFavorities } from "../../redux/favorities/favoritiesSelectors";
import { NotFounds } from "../NotFounds/NotFounds";

export const CatalogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasFetched, setHasFetched] = useState(false);

  const itemsPerPage = 3;
  const catalog = useSelector(selectCatalog);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const favoritesCatalog = useSelector(selectFavorities);
  const user = useSelector(selectUser);
  const catalogLength = useSelector(selectCatalogLength);
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog({ currentPage, itemsPerPage, filter }));
    dispatch(fetchFavorities(user));
    setHasFetched(true);
  }, [pathname, currentPage, dispatch, filter, user]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const newCatalog =
    pathname === "/catalog"
      ? sortedCatalog(catalog)[filter]
      : sortedCatalog(favoritesCatalog)[filter];

  const wrapperStyle = {
    justifyContent: "center",
  };

  return (
    <Container>
      {isLoading ? (
        <Oval
          color="#f03f3b"
          secondaryColor="transparent"
          wrapperStyle={wrapperStyle}
        />
      ) : (
        <>
          <CatalogListStyled>
            {newCatalog.map((babysitter, index) => (
              <CatalogItem key={index} babysitter={babysitter} />
            ))}
          </CatalogListStyled>
          {hasFetched && newCatalog.length === 0 && <NotFounds />}
          {hasFetched &&
            catalogLength > newCatalog.length &&
            newCatalog.length > 0 && (
              <CatalogListBtn onClick={handleNextPage}>
                Load more
              </CatalogListBtn>
            )}
        </>
      )}
    </Container>
  );
};
