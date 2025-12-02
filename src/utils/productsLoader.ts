import type { LoaderFunction } from "react-router-dom";
import { productFetch } from "./customFetch";
import type { FilterParams, ProductPageResponse } from "./type";
const productParams = {
  limit: 10,
};
export const productPageLoader: LoaderFunction = async ({
  request,
}): Promise<ProductPageResponse> => {
  const params: FilterParams = Object.fromEntries(
    new URL(request.url).searchParams
  );

  const formattedParams = {
    page: params.page ? parseFloat(params.page) : 0,
    limit: productParams.limit,
  };
  try {
    const res = await productFetch.get<ProductPageResponse>("/", {
      params: formattedParams,
    });

    return {
      totalProducts: res.data.totalProducts,
      products: res.data.products,
      limit: productParams.limit,
    };
  } catch (error) {
    console.log(error);
    return { totalProducts: 0, products: null, limit: productParams.limit };
  }
};
