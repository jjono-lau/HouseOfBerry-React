import React from "react";
import assets from "../assets/assets";
import DarkMode from "./DarkMode";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-primary dark:bg-black">
      
      
      
      {/* Logo */}
      <a href="#" className="relative z-30">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-22 h-auto lex-shrink-0"
          alt="House of Berry Logo"
        />
      </a>


      {/* Desktop links */}
      <div className="hidden sm:flex items-center gap-5 dark:text-primary">
        <a href="#" className="text-lg hover:border-b ">HOME</a>
        <a href="#offerings" className="text-lg hover:border-b">OFFERINGS</a>
        <a href="#about" className="text-lg hover:border-b">ABOUT</a>
        <a href="#faq" className="text-lg hover:border-b">FAQS</a>
        <a href="#contact" className="text-lg hover:border-b">CONTACT</a>
      </div>




      {/* Right side: mobile menu icon & desktop button */}
      <div className="flex items-center gap-2 sm:gap-4">

      <DarkMode theme={theme} setTheme={setTheme}/>


        {/* Mobile menu icon */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Mobile Menu Icon"
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />


        {/* Desktop Offering button */}
        <a
          href="#offerings"
          className="text-lg max-sm:hidden flex items-center gap-5 bg-pink-300 text-gray-700 px-6 py-1.5 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Offerings <img src={assets.arrow_icon} width={15} alt="Desktop Offerings Button" />
        </a>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`sm:hidden  fixed top-0 bottom-0 right-0 w-0 ${
          sidebarOpen ? "w-60 pl-10" : "overflow-hidden"
        } min-h-screen flex flex-col bg-primary dark:bg-black dark:text-primary text-black pt-20 transition-all overflow-y-auto`}
      >
        {/* Close icon */}
        <img
          src={theme === "dark" ? assets.close_icon : assets.close_icon_dark}
          alt="Close Sidebar Icon"
          className="w-6 h-6 absolute right-4 top-7"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar links */}
        <a onClick={() => setSidebarOpen(false)} href="#" className="text-lg mb-4">HOME</a>
        <a onClick={() => setSidebarOpen(false)} href="#offerings" className="text-lg mb-4">OFFERINGS</a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className="text-lg mb-4">ABOUT</a>
        <a onClick={() => setSidebarOpen(false)} href="#faq" className="text-lg mb-4">FAQS</a>
        <a onClick={() => setSidebarOpen(false)}href="#contact" className="text-lg mb-4">CONTACT</a>


      </div>
    </div>
  );
};

export default Navbar;
