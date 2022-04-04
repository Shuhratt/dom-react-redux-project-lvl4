import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
import { App } from "../components/App";

import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";

import "../assets/application.scss";
import { AuthProvider } from "../context/auth";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}
const chat = document.getElementById("chat");

createRoot(chat).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);
