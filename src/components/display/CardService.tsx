import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Cable, House, PaintBucket, Wrench } from "lucide-react";
type Props = {
  text: "outils" | "peintures" | "materiaux" | "electrique";
  titleSize: string;
};
const CardService: React.FC<Props> = ({ text, titleSize }) => {
  return (
    <Card className="border bg-neutral-100 w-9/12 mx-auto sm:w-full hover:bg-neutral-200 ease-in-out duration-200">
      <CardHeader>
        {text === "outils" && (
          <Wrench className="w-full text-secondary" size={50} strokeWidth={2} />
        )}
        {text === "peintures" && (
          <PaintBucket
            className="w-full text-secondary"
            size={50}
            strokeWidth={2}
          />
        )}
        {text === "electrique" && (
          <Cable className="w-full text-secondary" size={50} strokeWidth={2} />
        )}
        {text === "materiaux" && (
          <House className="w-full text-secondary" size={50} strokeWidth={2} />
        )}
      </CardHeader>
      <CardContent>
        {text === "outils" && <p className={titleSize}>Outils et equipement</p>}
        {text === "peintures" && (
          <p className={titleSize}>Peinture et bricolage</p>
        )}
        {text === "electrique" && (
          <p className={titleSize}>Equipement electrique</p>
        )}
        {text === "materiaux" && (
          <p className={titleSize}>Matériau et construction</p>
        )}
      </CardContent>
      <CardFooter>
        <CardDescription>
          {text === "outils" && (
            <p>Une large gamme d'outils pour tous types de travaux</p>
          )}
          {text === "peintures" && (
            <p>Peinture, vernis ,pinceaux et accessoires</p>
          )}
          {text === "electrique" && <p>Equipement electrique</p>}
          {text === "materiaux" && <p>Materiaux de construction</p>}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default CardService;
