import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";
import React from "react";

function PrivateRoute({ children }) {
  const { isAuth } = React.useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;