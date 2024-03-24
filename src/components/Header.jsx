/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { cartImg, mainLogo } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { ToastContainer , toast } from "react-toastify";



const Header = () => {
  const productData = useSelector((state) => state.ecommerce.productData);
  return (
    <div className="w-full h-20 shadow-inner bg-blue-200 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
       <Link to="/">
       <div>
          <img src={mainLogo} alt="mainLogo" className="w-16" />
        </div>
       </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-titleFont font-blod hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-titleFont font-blod hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-titleFont font-blod hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-titleFont font-blod hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-titleFont font-blod hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] pb-2 cursor-pointer duration-300">
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
          <img className=" w-9 h-9 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfAxGV-fZxGL9elM_hQ2tp7skLeSwMyUiwo4lMm1zyA&s" alt="" />
        </div>
      </div>
      {/* <ToastContainer
       position="top-left"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
      /> */}
    </div>
  );
};

export default Header;
