import { Search, WrapProduct } from "@/components/display";
import type { Product } from "@/utils/type";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectValue, setSelectValue] = useState<string>("Tous");
  const [inputValue, setInputValue] = useState<string>("");
  const fields = [
    "Tous",
    "Matériau de construction",
    "oulils et equipement",
    "peinture et bricolage",
    "equipement electrique",
  ];
  const ProduitsFiltered = products.filter((product) => {
    if (selectValue === "Tous" && inputValue === "") {
      return product;
    } else if (selectValue === "Tous" && inputValue !== "") {
      return product.name.toLowerCase().includes(inputValue.toLowerCase());
    } else if (selectValue !== "Tous" && inputValue === "") {
      return product.categorie === selectValue.toLowerCase();
    } else if (selectValue !== "Tous" && inputValue !== "") {
      return (
        product.categorie === selectValue.toLowerCase() &&
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  });
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get<Product[]>(
          "http://localhost:4400/api/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);

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
        products={ProduitsFiltered}
        title={`${selectValue.replace(/^./, (str) =>
          str.toUpperCase()
        )} produits`}
      />
    </section>
  );
};

export default ProductPage;
