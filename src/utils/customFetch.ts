import axios from "axios";

const ProductAPI = "https://quincaillerie-back.onrender.com/api/products";
export const productFetch = axios.create({
  baseURL: ProductAPI,
  headers: {
    "Content-Type": "application/json",
  },
});
