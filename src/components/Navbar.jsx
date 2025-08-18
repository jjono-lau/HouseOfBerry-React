import React from "react";
import assets from "../assets/assets";
import DarkMode from "./DarkMode";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-primary dark:bg-gray-900/70">
      
      
      
      {/* Logo */}
      <a href="#" className="relative z-30">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alt=""
        />
      </a>


      {/* Desktop links */}
      <div className="hidden sm:flex items-center gap-5 dark:text-primary">
        <a href="#" className="text-lg hover:border-b ">Home</a>
        <a href="#about" className="text-lg hover:border-b">About</a>
        <a href="#offering" className="text-lg hover:border-b">Offering</a>
        <a href="#faq-us" className="text-lg hover:border-b">FAQ</a>
        <a href="#contact" className="text-lg hover:border-b">Contact</a>
      </div>




      {/* Right side: mobile menu icon & desktop button */}
      <div className="flex items-center gap-2 sm:gap-4">

      <DarkMode theme={theme} setTheme={setTheme}/>


        {/* Mobile menu icon */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />


        {/* Desktop Offering button */}
        <a
          href="#offering"
          className="text-lg max-sm:hidden flex items-center gap-5 bg-pink-300 text-gray-700 px-6 py-1.5 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Offering <img src={assets.arrow_icon} width={15} alt="" />
        </a>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`sm:hidden fixed top-0 bottom-0 right-0 w-0 ${
          sidebarOpen ? "w-60 pl-10" : "overflow-hidden"
        } min-h-screen flex flex-col bg-primary dark:bg-gray-900/70 text-black pt-20 transition-all overflow-y-auto`}
      >
        {/* Close icon */}
        <img
          src={theme === "dark" ? assets.close_icon : assets.close_icon_dark}
          alt=""
          className="w-6 h-6 absolute right-4 top-7"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar links */}
        <a onClick={() => setSidebarOpen(false)} href="#" className="text-lg mb-4">Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className="text-lg mb-4">About</a>
        <a onClick={() => setSidebarOpen(false)} href="#offering" className="text-lg mb-4">Offering</a>
        <a onClick={() => setSidebarOpen(false)} href="#faq-us" className="text-lg mb-4">FAQ</a>
        <a onClick={() => setSidebarOpen(false)}href="#contact" className="text-lg mb-4">Contact</a>


      </div>
    </div>
  );
};

export default Navbar;
