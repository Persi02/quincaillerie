import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BadgeCheck, Brain, Truck } from "lucide-react";
const Engagement = () => {
  return (
    <>
      <Card className="border bg-neutral-100 w-9/12 mx-auto sm:w-full hover:bg-neutral-200 ease-in-out duration-200">
        <CardHeader>
          <BadgeCheck
            className="w-full text-secondary"
            size={50}
            strokeWidth={2}
          />
        </CardHeader>
        <CardContent>
          <p className="text-center font-bold">Qualité</p>
        </CardContent>
        <CardFooter>
          <CardDescription>
            <p>Nous nous engageons a fournir des produits de qualité.</p>
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="border bg-neutral-100 w-9/12 mx-auto sm:w-full hover:bg-neutral-200 ease-in-out duration-200">
        <CardHeader>
          <Brain className="w-full text-secondary" size={50} strokeWidth={2} />
        </CardHeader>
        <CardContent>
          <p className="text-center font-bold">Conseil</p>
        </CardContent>
        <CardFooter>
          <CardDescription>
            <p>Assistance technique gratuite.</p>
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="border bg-neutral-100 w-9/12 mx-auto sm:w-full hover:bg-neutral-200 ease-in-out duration-200">
        <CardHeader>
          <Truck className="w-full text-secondary" size={50} strokeWidth={2} />
        </CardHeader>
        <CardContent>
          <p className="text-center font-bold">Proximité</p>
        </CardContent>
        <CardFooter>
          <CardDescription>
            <p> Retrait & livraison locale</p>
          </CardDescription>
        </CardFooter>
      </Card>
    </>
  );
};

export default Engagement;
