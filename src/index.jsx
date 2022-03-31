import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
import { App } from "../components/App";

import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";

import "../assets/application.scss";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

createRoot(document.getElementById("chat")).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
);
