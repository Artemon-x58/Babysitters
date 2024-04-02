import {
  CatalogItemListInfoItem,
  CatalogItemListInfoSpan,
  CatalogItemListInfoText,
} from "./CatalogItemInfo.styled";

export const CatalogItemInfo = ({ label, value }) => (
  <CatalogItemListInfoItem>
    <CatalogItemListInfoText>
      {label}: <CatalogItemListInfoSpan>{value}</CatalogItemListInfoSpan>
    </CatalogItemListInfoText>
  </CatalogItemListInfoItem>
);
