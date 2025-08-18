import React from "react";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-[#ffeffa] dark:bg-gray-900/70">
      <a href="#">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alts=""
        />
      </a>

      <div className="text-gray-700 dark:text-white sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary  max-sm:text-black max-sm:pt-20 flex sm:items-center gap-5 trasition-all ">


        <img src={theme === "dark" ? assets.close_icon : assets.close_icon_dark} alts="" className='w-5 absolute right-4 top-4 sm:hidden' />
        


        <a href="#" className="text-lg m:hover:border-b">
          Home
        </a>
        <a href="#about" className="text-lg sm:hover:border-b">
          About
        </a>
        <a href="#offering" className="text-lg sm:hover:border-b">
          Offering
        </a>
        <a href="#faq-us" className="text-lg sm:hover:border-b">
          FAQ
        </a>
        <a href="#contact" className="text-lg sm:hover:border-b">
          Contact
        </a>
      </div>

      <div>
        <a
          href="#offering"
          className="text-lg max-sm:hidden flex items-center gap-1 bg-pink-300 text-gray-700 px-6 py-1.5 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Offering
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
