import React, { useState } from "react";
import { Logo, ArrowDown, ArrowUp, Close, Menu } from "../assets";
import { CompanyLinks, featuresLinks, navLinks } from "../constants";
import { LoginButton } from "./Button";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [arrowToggle, setArrowToggle] = useState(false);
  const [fTToggle, setFtToggle] = useState(false);
  const [arrowToggle2, setArrowToggle2] = useState(false);
  return (
    <nav className="w-full  flex py-6 justify-between items-center navbar ">
      <img src={Logo} alt="snap" className="w-[110px] h-[36px]  mr-[5rem]" />
      <ul className="sm:flex hidden list-none justify-start items-center flex-1">
        <li
          className={`font-epilogue font-medium cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-8 text-secondary flex gap-2`}
        >
          <a href="/">Features</a>
          <img
            className="w-[18px] h-[28px] object-contain"
            src={arrowToggle ? ArrowUp : ArrowDown}
            alt="menu"
            onClick={() => setArrowToggle((prev) => !prev)}
          />
          <div
            className={`${
              arrowToggle ? "flex" : "hidden"
            } bg-primary h-[100% absolute top-20 left-[15rem] z-10 mx-4 min-w-[140px] sidebar drop-shadow-2xl rounded-[18px] p-[1.8rem]`}
          >
            <ul className="flex flex-col list-none items-center flex-1">
              {featuresLinks.map((link, index) => (
                <li
                  key={link.name + index}
                  className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary mr-0 mb-3 text-secondary flex gap-7 `}
                >
                  <img
                    className="w-[18px] h-[28px] object-contain items"
                    src={link.icon}
                    alt="menu"
                  />
                  <a href={`/`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          className={`font-epilogue font-medium cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-8 text-secondary flex gap-2`}
        >
          <a href="/">Company</a>
          <img
            className="w-[18px] h-[28px] object-contain"
            src={arrowToggle2 ? ArrowUp : ArrowDown}
            alt="menu"
            onClick={() => setArrowToggle2((prev) => !prev)}
          />
          <div
            className={`${
              arrowToggle2 ? "flex" : "hidden"
            } bg-primary h-[100% absolute top-20 left-[23rem] z-10 mx-4 min-w-[140px] sidebar drop-shadow-2xl rounded-[18px] p-[1.8rem] justify-start items-start text-left`}
          >
            <ul className="flex flex-col list-none flex-1">
              {CompanyLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary mr-0 mb-3 text-secondary text-left`}
                >
                  <a href={`/`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          className={`font-epilogue font-medium cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-10 text-secondary`}
        >
          <a href="/">Careers</a>
        </li>
        <li
          className={`font-epilogue font-medium cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-10 text-secondary`}
        >
          <a href="/">About</a>
        </li>
      </ul>
      <div className="sm:flex hidden list-none justify-end items-center ml-[10rem] flex-1">
        <LoginButton />
      </div>

      <div className="sm:hidden  flex flex-1 justify-end items-center z-10">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toggle ? Close : Menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary border-l-[2px] h-[100%] absolute top-20 right-0 mx-4 min-w-[140px] sidebar`}
        >
          <ul className="flex flex-col list-none flex-1">
            <li
              className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-0 mb-3 text-secondary`}
            >
              <a href={`/`}>Features</a>
              <img
                className="w-[18px] h-[28px] object-contain"
                src={arrowToggle ? ArrowUp : ArrowDown}
                alt="menu"
                onClick={() => setArrowToggle((prev) => !prev)}
              />
              <div
                className={`${
                  arrowToggle ? "flex" : "hidden"
                } bg-primary h-[100% absolute top-20 left-[15rem] z-10 mx-4 min-w-[140px] sidebar drop-shadow-2xl rounded-[18px] p-[1.8rem]`}
              >
                <ul className="flex flex-col list-none items-center flex-1">
                  {featuresLinks.map((link, index) => (
                    <li
                      key={link.name + index}
                      className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary mr-0 mb-3 text-secondary flex `}
                    >
                      <img
                        className="w-[18px] h-[28px] object-contain items"
                        src={link.icon}
                        alt="menu"
                      />
                      <a href={`/`}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-0 mb-3 text-secondary`}
            >
              <a href={`/`}>Company</a>
            </li>
            <li
              className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-0 mb-3 text-secondary`}
            >
              <a href={`/`}>Careers</a>
            </li>
            <li
              className={`font-epilogue font-semibold cursor-pointer text-[18px] hover:bg-primary hover:text-almostBlack mr-0 mb-3 text-secondary`}
            >
              <a href={`/`}>About</a>
            </li>
            <div className="flex flex-col items-center">
              <LoginButton className="ml-0 " /> 
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
