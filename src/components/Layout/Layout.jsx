import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

export const Layout = ({ isLoggedIn }) => {
  return (
    <>
      <AppBar isLoggedIn={isLoggedIn} />
      <Suspense fullback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
