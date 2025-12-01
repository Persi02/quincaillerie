import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="hero ">
        <div className="flex flex-col gap-2 max-w-2xs text-white">
          <h1 className="text-3xl font-bold">Bienvenue chez Quincaillerie</h1>
          <p>Votre partenaire de confiance en matière de quincaillerie</p>
          <Button
            variant="default"
            className="font-bold self-start"
            onClick={() => navigate("/product")}
          >
            Voir nos produits
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
