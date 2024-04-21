import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { Catalog } from "../pages/catalog";
import { HomePage } from "../pages/home";
import { useEffect } from "react";
import { Favorities } from "../pages/favorities";
import { refreshUser } from "../redux/auth/authOperations";
import { useAuth } from "../hooks/useAuth";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route path="/favorities" element={<Favorities />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
