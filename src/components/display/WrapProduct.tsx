import type { Product } from "@/utils/type";
import CardProduct from "./CardProduct";

type Props = {
  products: Product[];
  title: string;
};
const WrapProduct: React.FC<Props> = ({ products, title }) => {
  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.name}>
              <CardProduct product={product} />
            </div>
          ))
        ) : (
          <p className="text-center text-2xl text-gray-400 sm:col-span-2 md:col-span-3">
            Produit non disponible...
          </p>
        )}
      </div>
    </div>
  );
};

export default WrapProduct;
