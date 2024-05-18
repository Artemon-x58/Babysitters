import styled from "styled-components";

export const CatalogItemStyled = styled.li`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  padding: 24px;
  border-radius: 24px;
  background: #fbfbfb;
`;

export const CatalogItemMainWrapper = styled.div``;

export const CatalogItemImgWrapper = styled.div`
  position: relative;
  min-width: 92px;
  height: 92px;
  padding: 12px;
  border: 2px solid rgba(240, 63, 59, 0.2);
  border-radius: 30px;

  &::after {
    content: "";
    position: absolute;
    top: 9px;
    right: 14px;
    width: 9px;
    height: 9px;
    border-radius: 100%;
    background-color: #38cd3e;
    border: 2.5px solid #fbfbfb;
  }
`;

export const CatalogItemImg = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
`;

export const CatalogItemProffesionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CatalogItemProffesion = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;

export const CatalogItemPropertiesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const CatalogItemLocationSvg = styled.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
  stroke: #11101c;
  fill: transparent;
`;
export const CatalogItemPropertiesText = styled.p`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 150%;
  color: #11101c;
`;

export const CatalogItemPropertiesBetweenSpan = styled.span`
  margin-left: 16px;
  margin-right: 16px;

  color: rgba(17, 16, 28, 0.2);
`;

export const CatalogItemPriceSpan = styled.span`
  margin-left: 5px;
  color: #38cd3e;
`;

export const CatalogItemRatingSvg = styled.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
`;

export const CatalogItemBtnHeart = styled.button`
  margin-left: 48px;
  border: none;
  background: transparent;
`;

export const CatalogItemHeartSvg = styled.svg`
  width: 26px;
  height: 26px;
  stroke: ${({ $isFavorite }) => ($isFavorite ? "transparent" : "#11101c")};
  fill: ${({ $isFavorite }) => ($isFavorite ? "#F03F3B" : "transparent")};
`;

export const CatalogItemName = styled.h2`
  margin-bottom: 24px;

  font-size: 24px;
  line-height: 100%;
  color: #11101c;
`;

export const CatalogItemListInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  li:first-child > p > span {
    text-decoration: underline;
  }
`;

export const CatalogItemSubtitle = styled.p`
  margin-bottom: 14px;

  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;

export const CatalogItemButton = styled.button`
  border: none;
  background: transparent;

  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #11101c;
`;
