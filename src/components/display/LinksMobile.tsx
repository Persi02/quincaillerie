import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { links, type Links } from "@/utils/links";

const LinksMobile = () => {
  //flex sm:hidden flex-col px-7
  return (
    <>
      <DropdownMenu>
        <div className="w-full flex flex-col px-4 sm:hidden">
          <DropdownMenuTrigger asChild className="self-end">
            <Button variant="outline">
              <Menu className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="" align="end">
            {links.map((link) => {
              const { ref, label } = link as Links;
              return (
                <NavLink
                  to={ref}
                  key={label}
                  className={({ isActive }) =>
                    ` ${isActive ? "text-secondary font-bold" : ""}`
                  }
                >
                  <DropdownMenuItem className="justify-end">
                    {label}
                  </DropdownMenuItem>
                </NavLink>
              );
            })}
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </>
  );
};

export default LinksMobile;
