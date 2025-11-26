import { Search, WrapProduct } from "@/components/display";
import type { Product } from "@/utils/type";
import { data } from "@/data/data";
import { useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>(data);
  const [selectValue, setSelectValue] = useState<string>("Tous");
  const fields = [
    "Tous",
    "Matériau de construction",
    "oulils et equipement",
    "peinture et bricolage",
    "equipement electrique",
  ];
  const ProduitsFiltered = products.filter((product) => {
    if (selectValue === "Tous") {
      return product;
    } else {
      return product.categorie === selectValue.toLowerCase();
    }
  });
  console.log(setProducts);

  return (
    <section>
      <Search
        fields={fields}
        setSelectValue={setSelectValue}
        selectValue={selectValue}
      />
      <WrapProduct
        products={ProduitsFiltered}
        title={`${selectValue.replace(/^./, (str) =>
          str.toUpperCase()
        )} produits`}
      />
    </section>
  );
};

export default ProductPage;
