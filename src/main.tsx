import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SiteHeader } from "./components/Header/index.tsx";
import { DockDemo } from "./components/DemoDock.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SiteHeader />
    <RouterProvider router={router} />

    <DockDemo />
  </React.StrictMode>
);
