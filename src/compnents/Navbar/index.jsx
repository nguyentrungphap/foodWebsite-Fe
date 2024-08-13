import React, { useState } from "react";
import { assets } from "./../../assets/assets";
import clsx from "clsx";

const MENUNAV = ["Home", "Menu", "Mobile", "Contact"];

function Navbar() {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="p-5 flex justify-between items-center">
      <img src={assets.logo} alt="" className="w-[150px]" />
      <ul className="flex gap-5 text-textColor text-lg">
        {MENUNAV.map((menuNav) => {
          return (
            <li
              className={clsx("cursor-pointer", {
                "pb-[2px] border-b-2": menu === menuNav,
              })}
              onClick={() => setMenu(menuNav)}
            >
              {menuNav}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="">
          <img src={assets.basket_icon} alt="" />
          <div className=""></div>
        </div>
        <button className="bg-transparent text-base text-textColor border-2 border-tomato px-[30px] py-[10px] rounded-[50px] cursor-pointer  transition-colors duration-700 ease-in-out hover:bg-button ">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
