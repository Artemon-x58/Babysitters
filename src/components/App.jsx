import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

import { Catalog } from "../pages/catalog";
import { HomePage } from "../pages/home";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Favorities } from "../pages/favorities";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user);
    });
  }, [isLoggedIn]);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />

          {isLoggedIn && <Route path="favorities" element={<Favorities />} />}
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
