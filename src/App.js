import BirthDay from "./components/BirthDays/BirthDay";
import React from "react";
import ShowCouples from "./components/TwoByTwo/ShowCouples";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./components/Root";
import Error from "./components/Error";
import Reviews from "./components/Review/Reviews";
import Socials from "./components/Events/Socials";
import Mothers from "./components/Mothers/Mothers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "birthday", element: <BirthDay /> },
      { path: "showcouples", element: <ShowCouples /> },
      { path: "review", element: <Reviews /> },
      { path: "socials", element: <Socials /> },
      { path: "mothers", element: <Mothers /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
