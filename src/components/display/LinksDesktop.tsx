import { links, type Links } from "@/utils/links";
import { NavLink } from "react-router-dom";

const LinksDesktop = () => {
  return (
    <div className="hidden w-full sm:flex gap-x-20 justify-center items-center">
      {links.map((link) => {
        const { ref, label } = link as Links;
        return (
          <NavLink
            to={ref}
            key={label}
            className={({ isActive }) =>
              `capitalize  ${
                isActive ? "text-secondary scale-110 font-bold" : ""
              } ease-in-out duration-300`
            }
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default LinksDesktop;
