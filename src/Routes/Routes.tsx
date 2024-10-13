import { createBrowserRouter } from "react-router-dom";

import Page404 from "pages/Page404/Page404";
import FormPage from "pages/FormPage/FormPage";
import HomePage from "pages/HomePage/Homepage";

import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "form/", element: <FormPage /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]);
