import { NavLink } from "react-router";
import { Navi_Links } from "../Utils/NaviLinks.js";
import type { NavigationProps } from "../Utils/Interfaces.js";

export default function Navigation({
  className = "",
  linkClass = "",
  onLinkClick,
}: NavigationProps) {
  return (
    <nav className={className}>
      {Navi_Links.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `${linkClass} ${
              isActive ? "opacity-100 underline" : "opacity-70"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
