import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<Navigate to="/login" />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
