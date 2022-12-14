import React from "react";
import {
  BellIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12">
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2">
        <MagnifyingGlassIcon className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search here"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="items-center justify-end space-x-6 flex w-full">
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <InboxIcon className="h-6 w-6 cursor-pointer" />
        <UserCircleIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
