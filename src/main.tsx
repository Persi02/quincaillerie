import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/display/HomeLayout.tsx";
import ProductPage from "./page/ProductPage.tsx";
import LandingPage from "./page/LandingPage.tsx";
import About from "./page/About.tsx";
import { landingPageLoader } from "./utils/landingLoader.ts";
import { productPageLoader } from "./utils/productsLoader.ts";
import ErrorElement from "./components/display/ErrorElement.tsx";
import NotFound from "./page/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: landingPageLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "product",
        element: <ProductPage />,
        loader: productPageLoader,
        errorElement: <ErrorElement />,
      },
      { path: "about", element: <About /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
