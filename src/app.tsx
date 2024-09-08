import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Diary } from "./pages/Diary";
import MapGraph from "./pages/MapGraph";
import MapStreet from "./pages/MapStreet";
import Layout from "./layout";
import FPV from "./pages/FPV";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Diary />,
        },
        {
          path: "map/graph",
          element: <MapGraph />,
        },
        {
          path: "map/street",
          element: <MapStreet />,
        },
        {
          path: "map/fpv",
          element: <FPV />,
        },
      ],
    },
  ],
  {
    basename: "/dreamcatcher-frontend",
  }
);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
