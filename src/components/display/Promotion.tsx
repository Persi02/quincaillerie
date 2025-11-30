import type { Product } from "@/utils/type";

type Props = {
  productPromotion: Product;
};
const Promotion: React.FC<Props> = ({ productPromotion }) => {
  return (
    <div className=" h-[30vh] flex border shadow-xl banner bg-primary text-white rounded-sm overflow-hidden ">
      <div className="w-1/2 h-full">
        <img
          src={productPromotion.image}
          alt="image-product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-3 p-3">
        <h3 className="text-2xl font-bold text-center">
          Produit en promotion de <span className="text-green-500">-10%</span>
        </h3>
        <p className="text-xl  text-secondary">
          {productPromotion.name.toUpperCase()}
        </p>
        <p className="text-center">
          Coût{" "}
          <span className="text-secondary text-xl">
            {productPromotion.price - (productPromotion.price / 100) * 10} AR
          </span>{" "}
          au lieu de{" "}
          <span className="text-xl line-through decoration-red-500">
            {productPromotion.price}
          </span>{" "}
          Ar
        </p>
      </div>
    </div>
  );
};

export default Promotion;
