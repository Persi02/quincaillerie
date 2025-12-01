import { Search, WrapProduct } from "@/components/display";
import type { Product, ProductPageResponse } from "@/utils/type";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

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
      return product.category === selectValue.toLowerCase();
    } else if (selectValue !== "Tous" && inputValue !== "") {
      return (
        product.category === selectValue.toLowerCase() &&
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  });
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
    </section>
  );
};

export default ProductPage;
