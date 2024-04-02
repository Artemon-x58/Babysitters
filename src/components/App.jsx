import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

import { Catalog } from "../pages/catalog";
import { HomePage } from "../pages/home";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </>
  );
};
