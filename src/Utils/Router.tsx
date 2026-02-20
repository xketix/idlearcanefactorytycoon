import { createBrowserRouter } from "react-router";
import Marketplace from "../views/Marketplace";
import Home from "../views/Home";
import RootLayout from "./RootLayout";
import Media from "../views/Media";
import Patreon from "../views/Patreon";
import AboutUs from "../views/AboutUs";
import { ItemsLoader } from "../Components/Marketplace/ItemLoader";
import LoadingScreen from "../views/LoadingScreen";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/media", element: <Media /> },
      {
        path: "/marketplace",
        element: <Marketplace />,
        loader: ItemsLoader,
      },
      { path: "/patreon", element: <Patreon /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/loadingScreen", element: <LoadingScreen /> },
    ],
  },
]);
