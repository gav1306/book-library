import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Layout from "./layouts/Layout";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookmarks",
        element: <Bookmark />,
      },
    ],
  },
]);
