"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className="flex items-center justify-between navbar p-4 rounded-md">
      <h1 className="font-bold capitalize">{pathname.split("/").pop()}</h1>
      <div className="menu flex items-center gap-20">
        <div className="search flex items-center rounded-md px-4 py-1">
          <MdSearch size={30} color="white" />
          <input
            type="text"
            placeholder="Search"
            className="inputSearch mx-4"
          />
        </div>
        <div className={"icons flex gap-4"}>
          <MdOutlineChat size={23} />
          <MdNotifications size={23} />
          <MdPublic size={23} />
        </div>
      </div>
    </div>
  );
}

export default Navbar