import React from "react";
import CollectorsIcons from "../../Assets/Icons/Collectors";
import CollectionsIcons from "../../Assets/Icons/Collections";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeClassHandler = ({ isActive }) => {
    return isActive
      ? "flex items-center gap-[10px] pl-[30px] border-l-4 border-white bg-[#4B5768]"
      : "flex items-center gap-[10px] pl-[30px]";
  };
  return (
    <nav className="bg-[#14171F] border-t border-white pt-10 text-white">
      <ul className="grid gap-3 font-semibold text-sm tracking-wide">
        <li>
          <NavLink className={activeClassHandler} to="/Collectors">
            <span
              aria-hidden
              className="flex items-center justify-center h-[36px] w-[36px]"
            >
              <CollectorsIcons />
            </span>
            Collectors
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClassHandler} to="/Collections">
            <span
              aria-hidden
              className="flex items-center justify-center h-[36px] w-[36px]"
            >
              <CollectionsIcons />
            </span>
            Collections
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
