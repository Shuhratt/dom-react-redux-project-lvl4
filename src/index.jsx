import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "../components/App";
import store from "../slices/index.js";
import { AuthProvider } from "../context/auth";

import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";

import "../assets/application.scss";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}
const chat = document.getElementById("chat");

createRoot(chat).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);
