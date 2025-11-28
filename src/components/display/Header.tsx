import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex justify-between py-4">
      <div
        className="science-font text-3xl sm:text-4xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Quincaillerie
      </div>
      <Button variant="secondary" className="font-bold">
        Constactez Nous
      </Button>
    </div>
  );
};

export default Header;
