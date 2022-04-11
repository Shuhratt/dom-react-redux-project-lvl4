import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Main from "./main/Main";
import Login from "./login/Login";
import { RequireAuth } from "./RequredAuth";
import { useAuth } from "../context/auth";

export function App() {
  const { isAuthed } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <RequireAuth isAuthed={isAuthed} redirectPath={"/login"}>
              <Main />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequireAuth isAuthed={!isAuthed} redirectPath={"/"}>
              <Login />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
