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
        {products.map((product) => (
          <div key={product.name}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrapProduct;
