import React, { useState } from "react";
import { assets } from "./../../assets/assets";
import clsx from "clsx";
import { Link } from "react-router-dom";
const MENUNAV = ["Home"];

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div className="p-5 flex justify-between items-center">
        <Link to="/home"> <img src={assets.logo} alt="" className="w-[150px]" /></Link>
        <ul className="flex gap-5 text-textColor text-lg">
          {MENUNAV.map((menuNav) => {
            return (
              <Link
                to={menuNav.toLowerCase()}
                key={menuNav}
                className={clsx("cursor-pointer", {
                  "pb-[2px] border-b-2 text-tomato border-tomato": menu === menuNav,
                })}
                onClick={() => setMenu(menuNav)}
              >
                {menuNav}
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center gap-10">
          <img src={assets.search_icon} alt="" />
          <Link to="/cart">
            <div className=" relative">
              <img src={assets.basket_icon} alt="" />
              <div className="absolute min-w-[10px] min-h-[10px] bg-tomato rounded-full top-[-8px] right-[-8px]"></div>
            </div>
          </Link>
          <button
            className="bg-transparent text-base text-textColor border-2 border-tomato px-[30px] py-[10px] rounded-[50px] cursor-pointer  transition-colors duration-700 ease-in-out hover:bg-button"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
