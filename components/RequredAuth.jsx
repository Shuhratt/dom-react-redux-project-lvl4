import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children, isAuthed, redirectPath }) => {
  if (!isAuthed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
