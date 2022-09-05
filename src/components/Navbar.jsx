import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className="flex w-full absolute justify-between items-center z-10 text-white h-20 px-4">
      <div>
        <h1>BEACHES.</h1>
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" />
        <BsPerson />
      </div>
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} className="text-black"/>: <HiOutlineMenuAlt4 size={20} />}
        
      </div>
      {/* Mobile Menu */}
      <div className={nav ? "absolute md:hidden text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-2 flex flex-col ease-in-out duration-100" : "absolute md:hidden left-[-100%]  top-0 w-full bg-gray-100/90 px-4 py-2 flex flex-col ease-in-out duration-100"}>
        <ul>
          <h1 className="mt-[14px]">BEACHES.</h1>
          <li className="border-b border-black">Home</li>
          <li className="border-b border-black">Destinations</li>
          <li className="border-b border-black">Travel</li>
          <li className="border-b border-black">Views</li>
          <li className="border-b border-black">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
