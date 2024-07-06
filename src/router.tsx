import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/auth", element: <>authPage</> },
  { path: "/prayer-tracker", element: <>Prayer Tracker Page</> },
  { path: "/badges", element: <>BadgesPage</> },
  { path: "/profile", element: <>profilePage</> },
  { path: "/leaderboards", element: <>Leaderboards</> },
  { path: "/donate", element: <>donatePage</> },
]);
