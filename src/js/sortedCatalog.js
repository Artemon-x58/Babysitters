export const sortedCatalog = (catalog) => {
  const sortedCatalogAZ = [...catalog].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const sortedCatalogZA = [...catalog].sort((a, b) =>
    b.name.localeCompare(a.name)
  );

  const sortedLessThen10 = [...catalog].sort(
    (a, b) => a.price_per_hour - b.price_per_hour
  );

  const sortedGreaterThen10 = [...catalog].sort(
    (a, b) => b.price_per_hour - a.price_per_hour
  );

  const sortedPopular = [...catalog].sort((a, b) => b.rating - a.rating);

  const sortedNotPopular = [...catalog].sort((a, b) => a.rating - b.rating);

  return {
    "a to z": sortedCatalogAZ,
    "z to a": sortedCatalogZA,
    "less than 10$": sortedLessThen10,
    "greater than 10$": sortedGreaterThen10,
    popular: sortedPopular,
    "not popular": sortedNotPopular,
    "show all": catalog,
  };
};
