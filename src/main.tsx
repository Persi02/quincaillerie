import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/display/HomeLayout.tsx";
import ProductPage from "./page/ProductPage.tsx";
import LandingPage from "./page/LandingPage.tsx";
import About from "./page/About.tsx";
import { landingPageLoader } from "./utils/landingLoader.ts";
import { productPageLoader } from "./utils/productsLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: landingPageLoader,
        errorElement: <h1>404</h1>,
      },
      { path: "product", element: <ProductPage />, loader: productPageLoader },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
