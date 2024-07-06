import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SiteHeader } from "./components/Header/index.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SiteHeader />
    <RouterProvider router={router} />
  </React.StrictMode>
);
