import React from "react";
import { Navigate } from "react-router-dom";
 const PrivateRoutes=(props)=> {
  const { isPrivate, children } = props;
  const token = localStorage.getItem("token");
  return !token && isPrivate === true ? (
    <Navigate to="/login" />
  ) : (
    <main>{children}</main>
  );
}

export default PrivateRoutes;