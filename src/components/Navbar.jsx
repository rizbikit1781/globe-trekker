import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-center justify-between gap-16 items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <a href="#home">
                <img
                  src="/globe.png"
                  width={250}
                  height={250}
                  alt="logo"
                  
                />
              </a>
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a href="#home" className="leading-normal no-underline text-lg font-semibold hover:text-white hover:bg-orange hover:p-2 rounded-md px-2">Home</a>
            <a href="#destination" className="leading-normal no-underline text-lg font-semibold hover:text-white hover:bg-orange hover:p-2 rounded-md px-2">Destination</a>
            <a href="#popular_tours" className="leading-normal no-underline text-lg font-semibold hover:text-white hover:bg-orange hover:p-2 rounded-md px-2">Popular Tours</a>
            <a href="#reviews" className="leading-normal no-underline text-lg font-semibold hover:text-white hover:bg-orange hover:p-2 rounded-md px-2">Reviews</a>
            <a href="#news" className="leading-normal no-underline text-lg font-semibold hover:text-white hover:bg-orange hover:p-2 rounded-md px-2">News</a>
            <a href="#contact" className="leading-normal no-underline text-lg font-semibold hover:text-white hover:bg-orange hover:p-2 rounded-md px-2">Contact</a>
          </ul>
          <div className="flex gap-4 max-lg:hidden w-40 justify-center">
            <button className="rounded-full bg-[#faf5ee] text-gray w-10 h-10 flex items-center justify-center hover:bg-orange hover:text-white">
              <CiSearch size={20} />
            </button>
            <button className="rounded-full bg-[#faf5ee] text-gray w-10 h-10 flex items-center justify-center hover:bg-orange hover:text-white">
              <BsPersonCircle size={20} />
            </button>
          </div>
          {dropdown ? (
            <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer">
              <MdClose />
            </div>
          ) : (
            <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer">
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-white transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full ">
                <a href="#home" className="hover:bg-orange hover:text-white">Home</a>
                <a href="#destination" className="hover:bg-orange hover:text-white">Destination</a>
                <a href="#popular_tours" className="hover:bg-orange hover:text-white">Popular Tours</a>
                <a href="#reviews" className="hover:bg-orange hover:text-white">Reviews</a>
                <a href="#news" className="hover:bg-orange hover:text-white">News</a>
                <a href="#contact" className="hover:bg-orange hover:text-white">Contact</a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
