import React, { useState } from "react";
import { Logo, ArrowDown, ArrowUp, Close, Menu } from "../assets";
import { navLinks } from "../constants";
import { LoginButton } from "./Button";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full  flex py-6 justify-between items-center navbar ">
      <img src={Logo} alt="snap" className="w-[110px] h-[36px]  mr-[3rem]" />
      <ul className="sm:flex hidden list-none justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <div>
            <li
              key={nav.id}
              className={`font-epilogue font-medium cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack ${
                index === navLinks.length - 1 ? "mr-0 " : "mr-10 "
              } text-secondary`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          </div>
        ))}
      </ul>
      <div className="sm:flex hidden list-none justify-end items-center ml-[10rem] flex-1">
        <LoginButton />
      </div>

      <div className="sm:hidden  flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toggle ? Close : Menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary border-l-[2px] h-[100%] border-almostBlack  absolute top-20 right-0 mx-4 min-w-[140px] sidebar`}
        >
          <ul className="flex flex-col list-none items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-0 mb-3 text-secondary`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <div className="flex flex-col">
              <LoginButton className="ml-0 " />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
