import axios from "axios";

const ProductAPI = "https://quincaillerie-back.onrender.com/api/products";
const MessageAPI = "https://quincaillerie-back.onrender.com/api/messages";
export const productFetch = axios.create({
  baseURL: ProductAPI,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
export const messageFetch = axios.create({
  baseURL: MessageAPI,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
