import type { LoaderFunction } from "react-router-dom";
import { productFetch } from "./customFetch";
import type { Productdata, ProductPageResponse } from "./type";

export const productPageLoader: LoaderFunction =
  async (): Promise<ProductPageResponse> => {
    try {
      const res = await productFetch.get<Productdata>("/");

      return { products: res.data.products };
    } catch (error) {
      console.log(error);
      return { products: null };
    }
  };
