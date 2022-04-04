import React from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { isAuthed } = useAuth();
  console.log(isAuthed, "requred");

  if (!isAuthed) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
