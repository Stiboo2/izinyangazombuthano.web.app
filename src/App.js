import BirthDay from "./components/BirthDays/BirthDay";
import React from "react";
import ShowCouples from "./components/TwoByTwo/ShowCouples";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./components/Root";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/birthday", element: <BirthDay /> },
      { path: "/showcouples", element: <ShowCouples /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
