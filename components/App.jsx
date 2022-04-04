import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import { RequireAuth } from "./RequredAuth";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
