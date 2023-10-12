import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ExistingUser from "./components/ExistingUser";
import SingleNote from "./components/SingleNote";
import Fav from "./components/Fav";
import Bin from "./components/Bin";
import PageNotFound from "./components/PageNotFound";
import NewUser from "./components/NewUser";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/existinguser",
    element: <ExistingUser></ExistingUser>,
  },
  {
    path: "/singlenote",
    element: <SingleNote></SingleNote>,
  },
  {
    path: "/fav",
    element: <Fav></Fav>,
  },
  {
    path: "/bin",
    element: <Bin></Bin>,
  },
  {
    path: "/newuser",
    element: <NewUser></NewUser>,
  },
  {
    path: "/*",
    element: <PageNotFound></PageNotFound>,
  },
]);
const App = () => {
  return (
    <>
      <main>
        <RouterProvider router={route}></RouterProvider>
      </main>
    </>
  );
};

export default App;
