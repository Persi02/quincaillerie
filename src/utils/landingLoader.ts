import { productFetch } from "./customFetch";
import type { Product } from "./type";

export const productFeturedFetcher = async (): Promise<Product[]> => {
  const res = await productFetch.get<Product[]>("/featured");
  return res.data;
};
export const productPromoFetcher = async (): Promise<Product[]> => {
  const res = await productFetch.get<Product[]>("/promo");
  return res.data;
};
export const productLatestFetcher = async (): Promise<Product[] | null> => {
  const res = await productFetch.get<Product[]>("/latest");
  return res.data;
};
