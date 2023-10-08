"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdNotificationsNone } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  // State to track whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setToggleBtn(!toggleBtn)
  }

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=' z-10 fixed w-full bg-white'>
    <div className="flex justify-between bg-white items-center h-20 w-full max-w-widthmax   m-auto px-4 ">
      <h1 className=" text-green font-bold text-2xl">ED Review</h1>

      <div className="flex items-center gap-6">
        <ul className="hidden lg:flex justify-between items-center font-medium gap-6 text-base text-black">
          <li>
            <a href="#">Companies</a>
          </li>
          <li>
            <a href="#">Course</a>
          </li>
          <li>
            <a href="#">Book demo</a>
          </li>
          <li>
            <a href="#">Internships</a>
          </li>
          <button className="lg:hidden bg-lightgreen text-black text-base font-medium rounded w-44 h-12">
            Post a Review
          </button>
        </ul>
        <div className="relative cursor-pointer">
          <MdNotificationsNone className=" text-black w-6 h-6" />
          <span className=" absolute w-3 h-3 bg-lightgreen rounded-full top-0 right-0"></span>
        </div>
        <div className="relative cursor-pointer">
          <Image
            src="/assets/profileImg.png"
            alt="User Profile"
            width={44}
            height={44}
            className="rounded-full"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <ul className="bg-white flex flex-col w-36 absolute top-16 right-0 rounded py-1 z-10 ">
              <li className="p-2 hover:bg-hover_bg transition duration-200 text-sm text-black">
                <a href="#">My Review</a>
              </li>
              <li className="p-2 hover:bg-hover_bg transition duration-200 text-sm text-black">
                <a href="#">Internship Applied</a>
              </li>
              <li className="p-2 hover:bg-hover_bg transition duration-200 text-sm text-black">
                <a href="#">Setting</a>
              </li>
              <li className="p-2 hover:bg-hover_bg transition duration-200 text-sm text-black">
                <a href="#">My Logout</a>
              </li>
            </ul>
          )}
        </div>
        {/* Post a review */}
        <button className="lg:block hidden bg-lightgreen text-black text-base font-medium rounded w-44	h-12	">
          Post a Review
        </button>
        <FaBarsStaggered className="lg:hidden text-2xl text-black cursor-pointer" onClick={toggleMenu} />
        {toggleBtn && (
          <div className="bg-white flex flex-col w-full h-full fixed top-20 right-0 py-1 z-10">
              <ul>
                <li>
                  <a href="#">Companies</a>
                </li>
                <li>
                  <a href="#">Course</a>
                </li>
                <li>
                  <a href="#">Book demo</a>
                </li>
                <li>
                  <a href="#">Internships</a>
                </li>
                <button className=" bg-lightgreen text-black text-base font-medium rounded w-44 h-12">
                 Post a Review
                </button>
              </ul>
          </div>
          )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
