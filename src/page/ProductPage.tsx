import { PaginationContainer, Search, WrapProduct } from "@/components/display";
import { Spinner } from "@/components/ui/spinner";
import type { Product, ProductPageResponse } from "@/utils/type";
import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const ProductPage = () => {
  const { products } = useLoaderData() as ProductPageResponse;
  const [selectValue, setSelectValue] = useState<string>("Tous");
  const [inputValue, setInputValue] = useState<string>("");
  const fields = [
    "Tous",
    "Matériau de construction",
    "oulils et equipement",
    "peinture et bricolage",
    "equipement electrique",
  ];
  const produitsFiltered = products?.filter((product) => {
    if (selectValue === "Tous" && inputValue === "") {
      return product;
    } else if (selectValue === "Tous" && inputValue !== "") {
      return product.name.toLowerCase().includes(inputValue.toLowerCase());
    } else if (selectValue !== "Tous" && inputValue === "") {
      return product.category.toLowerCase() === selectValue.toLowerCase();
    } else if (selectValue !== "Tous" && inputValue !== "") {
      return (
        product.category === selectValue.toLowerCase() &&
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  });
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
        setSelectValue={setSelectValue}
        selectValue={selectValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <WrapProduct
        products={produitsFiltered as Product[]}
        title={`${selectValue.replace(/^./, (str) =>
          str.toUpperCase()
        )} produits`}
      />
      <PaginationContainer />
    </section>
  );
};

export default ProductPage;
