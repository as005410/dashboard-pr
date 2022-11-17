import React, { useState } from "react";
import { navLinks } from "./utils/navBarComponents";

function NavBar() {
  return (
    <div className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">
        {navLinks.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>
      <div className="space-y-8 w-full pb-14 pt-8">
        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
}

function NavItem({ link }) {
  const [clickedNavItem, setClickedNavItem] = useState();
  return (
    <div
      onClick={() => setClickedNavItem(link.id)}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-gray-900 border-l-4 border-transparent ${
         clickedNavItem === link.id && "border-gray-900 "
       } `}
    >
      <span>{link.icon}</span>
      <h1
        className={`text-gray-600 group-hover:text-black xl:flex hidden ${
          clickedNavItem === link.id && "text-black "
        }`}
      >
        {link.title}
      </h1>
    </div>
  );
}

export default NavBar;
