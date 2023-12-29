import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useUserDataContext } from "../../context/UserDataContext";

const RequireAuth = () => {
  const { isLoggedIn } = useUserDataContext();
  const location = useLocation();
  const isLogged = JSON.parse("isLoggedIn");
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
