import type { Product } from "@/utils/type";
import CardProduct from "./CardProduct";

type Props = {
  productPhares: Product[];
};
const ProductPhares: React.FC<Props> = ({ productPhares }) => {
  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold mb-3">Produits phares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {productPhares.map((productPhare) => (
          <div key={productPhare.name}>
            <CardProduct product={productPhare} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPhares;
