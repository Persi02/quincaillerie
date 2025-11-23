import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="container flex justify-between py-4">
      <div className="science-font text-4xl font-bold">Quincaillerie</div>
      <Button variant="secondary" className="font-bold">
        Constactez Nous
      </Button>
    </div>
  );
};

export default Header;
