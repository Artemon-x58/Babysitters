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
  min-width: 92px;
  height: 92px;
  padding: 12px;
  border: 2px solid rgba(240, 63, 59, 0.2);
  border-radius: 30px;
`;

export const CatalogItemImg = styled.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
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
  gap: 32px;
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
  font-size: 16px;
  line-height: 150%;
  color: #11101c;
`;

export const CatalogItemPriceSpan = styled.span`
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
  stroke: #11101c;
  fill: transparent;
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
