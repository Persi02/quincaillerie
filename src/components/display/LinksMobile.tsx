import { links, type Links } from "@/utils/links";
import { NavLink } from "react-router-dom";

const LinksMobile = () => {
  return (
    <div className="flex sm:hidden flex-col px-7">
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

export default LinksMobile;
