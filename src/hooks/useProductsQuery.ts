import { productFetch } from "@/utils/customFetch";
import type { ProductPageResponse } from "@/utils/type";
import { useQuery, type QueryFunctionContext } from "@tanstack/react-query";
type FilterParams = {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
};

const fetchProducts = async (
  ctx: QueryFunctionContext<["products", FilterParams]>
) => {
  const [, params] = ctx.queryKey;
  const res = await productFetch.get<ProductPageResponse>("/", {
    params,
  });
  return res.data;
};

export const useProductsQuery = (params: FilterParams) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: fetchProducts,
    placeholderData: (prev) => prev,
    staleTime: 5 * 1000,
    retry: 1,
  });
};
