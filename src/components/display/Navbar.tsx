import LinksDesktop from "./LinksDesktop";
import LinksMobile from "./LinksMobile";

const Navbar = () => {
  return (
    <nav className="py-5">
      <div className="container">
        <LinksDesktop />
        <LinksMobile />
      </div>
    </nav>
  );
};

export default Navbar;
