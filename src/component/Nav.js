import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "../page/Home";
import {
  MdKeyboardArrowDown,
  MdClose,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const Nav = () => {
  const [navAbout, setNavAbout] = useState(false);
  const [navCart, setNavCart] = useState(false);
  const toggleNavAbout = () => {
    setNavAbout(!navAbout);
  };
  const toggleNavCart = () => {
    setNavCart(!navCart);
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full h-auto flex fixed top-0  bg-white">
        <div className="flex w-full  h-auto my-5 mx-16  ">
          <div className="flex justify-around  w-full  border border-black px-4">
            <div className="w-full  flex justify-start items-stretch space-x-10 ">
              <Link to="/collections/all" className="flex items-center">
                <p className="text-xl font-semibold">Shop</p>
              </Link>

              <div className="flex items-center">
                <Link to="#" className="flex" onClick={toggleNavAbout}>
                  <p className="text-xl font-semibold ">About</p>
                  <MdKeyboardArrowDown className="mt-1 text-2xl" />
                </Link>
              </div>

              <div className="flex items-center">
                <p className="text-xl font-semibold">Sustainability</p>
              </div>
            </div>

            <Link to="/" className="w-full  flex justify-center items-stretch ">
              <p className="text-4xl font-bold ">Bite</p>
            </Link>

            <div className="w-full  flex justify-end items-stretch space-x-10">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleNavCart}
              >
                <p className="text-xl font-semibold">Cart</p>
              </div>

              <Link to="login" className="flex items-center">
                <p className="text-xl font-semibold">My Accout</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* แทบ About */}
      <div
        className={`flex  h-full w-full fixed top-0 ${
          navAbout ? "left-0 " : "left-[-100%] "
        }`}
      >
        <div
          className={`flex flex-col bg-blue-200 w-[30rem] h-full absolute  top-0  z-10 `}
        >
          <div className="my-auto h-auto">
            <MdKeyboardArrowLeft
              onClick={toggleNavAbout}
              className="text-3xl border border-black absolute top-3 right-3 rounded-full cursor-pointer"
            />
            <div className="space-y-2 ml-10">
              <Link to="contact" onClick={toggleNavAbout}>
                <p>Contact</p>
              </Link>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>
        <div
          className=" felx w-full h-full relative z-0 bg-slate-200 opacity-60  "
          onClick={toggleNavAbout}
        ></div>
      </div>
      {/* แทบตะกร้า */}
      <div
        className={`flex justify-end w-full h-full fixed top-0 ${
          navCart ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="flex flex-col justify-between bg-white  w-[40rem] h-full absolute top-0 z-10">
          <div className="flex my-6 ml-6">
            <MdClose
              onClick={toggleNavCart}
              className="text-3xl border border-black  rounded-full cursor-pointer"
            />
            <p className="text-center w-full text-2xl font-semibold">My Cart</p>
          </div>
          {/* สินค้าที่เลือก */}
          <div className="h-full bg-[#dce7ed]"></div>
          <div className="h-32">total</div>
        </div>
        <div
          className="felx w-full h-full relative z-0 bg-slate-200 opacity-60"
          onClick={toggleNavCart}
        ></div>
      </div>

      <Outlet />
    </div>
  );
};

export default Nav;
