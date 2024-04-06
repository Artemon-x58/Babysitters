import { CatalogListBtn, CatalogListStyled } from "./CatalogList.styled";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Container } from "../Container/Container";
import { SelectComponent } from "../Select/SelectComponent";
import { useEffect, useState } from "react";
import { getBabysittersListDB } from "../../js/getBabysittersListDB";

export const CatalogList = () => {
  const [listBabysitters, setListBabysitters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    getBabysittersListDB(currentPage, itemsPerPage)
      .then((data) => {
        setListBabysitters(data);
      })
      .catch((error) => {
        console.error("Error fetching babysitters list:", error);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Container>
      <SelectComponent />
      <CatalogListStyled>
        {listBabysitters.map((babysitter, index) => (
          <CatalogItem key={index} babysitter={babysitter} />
        ))}
        <CatalogListBtn onClick={handleNextPage}>Load more</CatalogListBtn>
      </CatalogListStyled>
    </Container>
  );
};
