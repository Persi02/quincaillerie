import type { LoaderFunction } from "react-router-dom";
import { productFetch } from "./customFetch";
import type { landingPageResponse, Product } from "./type";

const productFeturedFetcher = async (): Promise<Product[] | null> => {
  try {
    const res = await productFetch.get<Product[]>("/featured");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const productPromoFetcher = async (): Promise<Product[] | null> => {
  try {
    const res = await productFetch.get<Product[]>("/promo");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const productLatestFetcher = async (): Promise<Product[] | null> => {
  try {
    const res = await productFetch.get<Product[]>("/latest");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const landingPageLoader: LoaderFunction =
  async (): Promise<landingPageResponse> => {
    try {
      const [featured, promo, latest] = await Promise.all([
        productFeturedFetcher(),
        productPromoFetcher(),
        productLatestFetcher(),
      ]);
      return { featured, promo, latest };
    } catch (error) {
      console.log(error);
      return { featured: null, promo: null, latest: null };
    }
  };
