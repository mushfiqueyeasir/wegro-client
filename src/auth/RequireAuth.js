import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DATA_CONTEXT } from "../provider/DataProvider";

function RequireAuth({ children }) {
  const { userDataMange } = useContext(DATA_CONTEXT);
  const currentUser = userDataMange.user;
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <>{children}</>;
  }
}

export default RequireAuth;
