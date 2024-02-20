import Link from "next/link";
import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import UserCard from "../userCard/UserCard";
import SigninButton from "../signinButton/signinButton";

const Sidebar = () => {
  return (
    <div className="p-3 pt-6 sidebar h-screen relative">
      <div className="userInfo flex gap-3 items-center">
        <UserCard/>
      </div>
      <div className="menu">
        <div className="category mt-[30px]">
          <h1 className="fadedFont">Pages</h1>
          <Link href={"/dashboard"}>
            <div className="flex mt-4 gap-4 menuLink p-2 rounded-md">
              <MdDashboard size={22} />
              <h1 className="font-semibold">Dashboard</h1>
            </div>
          </Link>
          <Link href={"/dashboard/users"}>
            <div className="flex mt-4 gap-4 menuLink p-2 rounded-md">
              <MdSupervisedUserCircle size={22} />
              <h1 className="font-semibold">Users</h1>
            </div>
          </Link>
          <Link href={"/dashboard/products"}>
            <div className="flex mt-4 gap-4 menuLink p-2 rounded-md">
              <MdShoppingBag size={22} />
              <h1 className="font-semibold">Products</h1>
            </div>
          </Link>
          <div className="flex mt-4 gap-4 menuLink p-2 rounded-md">
            <MdAttachMoney size={22} />
            <Link href={"/dashboard"}>Transactions</Link>
          </div>
        </div>
        <div className="category mt-[30px]">
          <h1 className="fadedFont">Analytics</h1>
          <div className="flex mt-4 gap-4 menuLink p-2 rounded-md">
            <MdWork size={22} />
            <Link href={"/dashboard"}>Revenue</Link>
          </div>
          <div className="flex mt-4 gap-4 menuLink p-2 rounded-md items-center">
            <MdAnalytics size={22} />
            <Link href={"/dashboard"}>Reports</Link>
          </div>
          <div className="flex mt-4 gap-4 menuLink p-2 rounded-md">
            <MdPeople size={22} />
            <Link href={"/dashboard"}>Teams</Link>
          </div>
        </div>
        <div className="category mt-[30px]">
          <h1 className="fadedFont">User</h1>
          <div className="flex mt-4 gap-4 menuLink p-2 rounded-md">
            <MdOutlineSettings size={22} />
            <Link href={"/dashboard"}>Settings</Link>
          </div>
          <div className="flex mt-4 gap-4 menuLink p-2 rounded-md items-center">
            <MdHelpCenter size={22} />
            <Link href={"/dashboard"}>Help</Link>
          </div>
          <div className="absolute bottom-0 left-0 m-5">
              <SigninButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;