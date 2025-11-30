import type { Product } from "@/utils/type";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
type Props = {
  product: Product;
};

const CardProduct: React.FC<Props> = ({ product }) => {
  return (
    <Card className="border-0 bg-neutral-100 p-0 w-10/12 mx-auto sm:w-full hover:bg-white ease-in-out duration-200">
      <CardContent className="w-full h-50 p-0">
        <img
          src={product.image}
          alt="product-img"
          className="w-full h-full object-cover"
        ></img>
      </CardContent>
      <CardHeader>
        <CardTitle className="capitalize">{product.name}</CardTitle>
        <p>{product.price} Ar</p>
      </CardHeader>

      <CardFooter className="flex justify-end p-3 pt-0">
        <Button variant={"outline"}>Voir les details</Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
