import { PaginationContainer, Search, WrapProduct } from "@/components/display";
import { Spinner } from "@/components/ui/spinner";
import type { Product, ProductPageResponse } from "@/utils/type";
import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const ProductPage = () => {
  const { products, params } = useLoaderData() as ProductPageResponse;
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const fields = [
    "Tous",
    "Matériau de construction",
    "oulils et equipement",
    "peinture et bricolage",
    "equipement electrique",
  ];

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <section className="section flex justify-center items-center h-64">
        <Spinner className="size-9" />
      </section>
    );
  }

  return (
    <section>
      <Search
        fields={fields}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
      />
      <WrapProduct
        products={products as Product[]}
        title={`${
          params.category?.replace(/^./, (str) => str.toUpperCase()) ?? "Tous"
        } produits`}
      />
      <PaginationContainer />
    </section>
  );
};

export default ProductPage;
