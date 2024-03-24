// eslint-disable-next-line no-unused-vars
import React from "react";
import { mainLogo, payMentCard } from "../assets";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsPaypal } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-black text-[#aaa9a9] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* ---------LOGOICON START------------- */}
        <div className="flex flex-col gap-6">
          <img className=" w-32" src={mainLogo} alt="mainLogoImg" />
          <img className="w-56 " src={payMentCard} alt="" />
          <div className="flex gap-8 text-lg">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <CiYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaXTwitter className="hover:text-white duration-300 cursor-pointer" />
            <CiInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* ---------LOGOICON END--------------- */}
        {/* ---------LOCATEUS START------------- */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Uttara,Dhaka.Bangladesh</p>
            <p>
              Mobile <strong>:</strong> 01797475538
            </p>
            <p>
              Mobile <strong>:</strong> 0185911589
            </p>
            <p>
              e-mail <strong>:</strong> ecomerrce@gmail.com{" "}
            </p>
          </div>
        </div>
        {/* ---------LOCATEUS END--------------- */}
        {/* ---------PROFILE START-------------- */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
        <div className="flex flex-col gap-2 text-base">
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <CiUser />
            </span>{" "}
            my account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPaypal />
            </span>{" "}
            chekout
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <CiLocationArrow1 />
            </span>
            order tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BiSupport />
            </span>{" "}
            help & support
          </p>
        </div>
        </div>
        {/* ---------PROFILE END---------------- */}
        {/* ---------SUBCRIBE START------------- */}
        <div className="flex items-center">
          <input type="email" placeholder="e-mail" 
          className=" bg-transparent border w-[270px] h-10 px-2 text-sm"/>
          <button className="w-[180px] h-10 px-2 text-start text-sm text-white border hover:bg-gray-600 active:bg-white active:text-black  ">Subscribe</button>
        </div>
        {/* ---------SUBCRIBE END--------------- */}
      </div>
    </div>
  );
};

export default Footer;
