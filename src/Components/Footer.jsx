import React from 'react';
import Logo from "../Images/Logo";
import { FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#17221C] text-[#95CD4D] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[#95CD4D] pb-6 gap-8">
          
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex items-center gap-3">
              <Logo />
              <h1 className="capitalize font-semibold text-xl">progace</h1>
            </div>
            <p className="font-medium text-sm leading-5">
              Our secure and user-friendly platform is designed for all levels of investors. With transparency and cutting-edge technology, we're your partner in financial success. Join us today.
            </p>
          </div>

          <div className="flex gap-16 text-sm font-medium capitalize">
            <div className="flex flex-col gap-1">
              <p>learn</p>
              <p>about</p>
              <p>disclaimer</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>blogs</p>
              <p>faq's</p>
              <p>privacy policy</p>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 gap-4">
          
          <div className="flex gap-4 text-lg">
            <FaLinkedin className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>

         
          <div className="flex items-center gap-2 text-sm font-medium">
            <FaRegCopyright />
            <span>2022 platform name</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
