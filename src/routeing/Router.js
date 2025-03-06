import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import DashBoard from "./DashBoard";
import Settings from "./Settings";
import NavBar from "./NavBar";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default MainRouter;
