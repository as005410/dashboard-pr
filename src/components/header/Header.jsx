import React from "react";

function Header() {
  return (
    <div className="bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12">
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2">
        <input
          type="text"
          placeholder="Search here"
          className="bg-transparent outline-none"
        />
      </div>
    </div>
  );
}

export default Header;
