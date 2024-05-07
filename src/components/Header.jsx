/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { cartImg, mainLogo } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const productData = useSelector((state) => state.ecommerce.productData);
  const userInfo = useSelector ((state) => state.ecommerce.userInfo);
  console.log(userInfo);


  const [isMenuOpen , setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen)
  }
 


  return (
    <div className="w-full h-20 shadow-inner bg-blue-200 sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto  flex items-center justify-between px-5">
       <Link to="/">
       <div>
          <img src={mainLogo} alt="mainLogo" className="w-16" />
        </div>
       </Link>
        <div className="flex items-center gap-8">
          <ul className="md:flex items-center gap-8 hidden">
            <li className="text-base text-black font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Blog
            </li>
          </ul>
        <Link to="/cart">
        <div className="relative">
            <img src={cartImg} alt="cartimg" className="w-9" />
            <span className=" absolute w-5 top-[7px] left-[10px] text-sm flex items-center justify-center font-semibold">
            {productData.length}
            </span>
          </div>

        </Link>
          <Link to="/login">
          <img className=" w-9 h-9 rounded-full"
           src={
            userInfo
            ? userInfo.image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfAxGV-fZxGL9elM_hQ2tp7skLeSwMyUiwo4lMm1zyA&s"
           } 
           alt=""
            />
          </Link>
          {
            userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2" >
              {userInfo.name}
              </p>
          }
        </div>
        {/* navbar for sm devices */}
        <div className='md:hidden'>
            <button onClick={toggleMenu}>

            {
              isMenuOpen ? <IoClose className='w-5 h-5 text-red-800' /> : <HiMiniBars3BottomLeft className='w-5 h-5 text-black' /> 
            }

            </button>
        </div>

      </div>

        {/*  only mobile menu items */}

        <ul className={` bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"} `}>
            <li className="text-base text-white font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-white font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-white font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-white font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-white font-titleFont font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          {/*  only mobile menu items */}

    </div>
  );
};

export default Header;
