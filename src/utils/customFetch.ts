import axios from "axios";

const ProductAPI = "http://localhost:4400/api/products";
export const productFetch = axios.create({
  baseURL: ProductAPI,
  headers: {
    "Content-Type": "application/json",
  },
});
