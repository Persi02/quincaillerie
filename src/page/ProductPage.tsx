import { PaginationContainer, Search, WrapProduct } from "@/components/display";
import { Spinner } from "@/components/ui/spinner";
import { useProductsQuery } from "@/hooks/useProductsQuery";
import type { Product } from "@/utils/type";
import { useState } from "react";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [params, setParams] = useState({ search: "", category: "" });
  const queryParams = {
    page,
    limit,
    search: params.search || undefined,
    category: params.category || undefined,
  };
  const fields = [
    "Tous",
    "Matériau de construction",
    "oulils et equipement",
    "peinture et bricolage",
    "equipement electrique",
  ];

  const { data, isLoading, isError } = useProductsQuery(queryParams);

  const products = data?.products;

  return (
    <section>
      <Search
        onChange={(p) => {
          setParams(p);
          setPage(1);
        }}
        fields={fields}
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-[30vh] ">
          <Spinner className="size-9" />
        </div>
      ) : isError ? (
        "error"
      ) : (
        <WrapProduct
          products={products as Product[]}
          title={`${
            params.category?.replace(/^./, (str) => str.toUpperCase()) ?? "Tous"
          } produits`}
        />
      )}
      {data && (
        <PaginationContainer data={data} setPage={setPage} page={page} />
      )}
    </section>
  );
};

export default ProductPage;
