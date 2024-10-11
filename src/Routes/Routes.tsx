import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import React from "react";
import FormPage from "../pages/FormPage/FormPage";
import HomePage from "../pages/HomePage/Homepage";
import Page404 from "../pages/Page404/Page404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "form/", element: <FormPage /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]);
