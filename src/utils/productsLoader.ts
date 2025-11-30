import type { LoaderFunction } from "react-router-dom";
import { productFetch } from "./customFetch";
import type { Product, ProductPageResponse } from "./type";

export const productPageLoader: LoaderFunction =
  async (): Promise<ProductPageResponse> => {
    try {
      const res = await productFetch.get<Product[]>("/");

      return { products: res.data };
    } catch (error) {
      console.log(error);
      return { products: null };
    }
  };
