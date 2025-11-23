import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/display/HomeLayout.tsx";
import ProductPage from "./page/ProductPage.tsx";
import LandingPage from "./page/LandingPage.tsx";
import About from "./page/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "product", element: <ProductPage /> },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
