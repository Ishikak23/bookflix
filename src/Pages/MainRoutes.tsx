import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const MainRoutes = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default MainRoutes;
