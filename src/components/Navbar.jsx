import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#offerings", label: "OFFERINGS" },
    { href: "#team", label: "TEAM" },
    { href: "#faq", label: "FAQS" },
    { href: "#contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = activeLink;
      let minDistance = Infinity;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const distance = Math.abs(section.getBoundingClientRect().top - 100);
          if (distance < minDistance) {
            minDistance = distance;
            current = link.href;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveLink(href);
      window.history.replaceState(null, "", " ");
      setSidebarOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-primary dark:bg-black"
    >
      {/* Logo */}
      <a
        href="#home"
        className="relative z-30 flex-shrink-0"
        onClick={(e) => {
          e.preventDefault();
          handleClick("#home");
        }}
      >
        <img
          src={theme === "dark" ? HouseOfBerryAssets.logo_dark : HouseOfBerryAssets.logo}
          className="w-[88px] h-auto"
          alt="House of Berry Logo"
        />
      </a>

      {/* Centered Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-5 dark:text-primary">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.href);
            }}
            className={`text-lg hover:text-pink-400 hover:border-b transition-colors ${
              activeLink === link.href ? "text-pink-400 border-b" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <DarkMode theme={theme} setTheme={setTheme} />

        {/* Mobile/Menu button: show on sm+ up to md */}
        <img
          src={theme === "dark" ? HouseOfBerryAssets.menu_icon_dark : HouseOfBerryAssets.menu_icon}
          alt="Mobile Menu Icon"
          className="w-7 h-7 md:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />

        {/* Offerings button: show only lg+ */}
        <a
          href="#offerings"
          className="hidden lg:flex items-center gap-5 bg-pink-300 dark:bg-gray-700 text-black dark:text-primary px-6 py-1.5 rounded-full cursor-pointer hover:scale-103 transition-all text-lg flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#offerings");
          }}
        >
          Offerings
          <img
            src={theme === "dark" ? HouseOfBerryAssets.arrow_pink : HouseOfBerryAssets.arrow_black}
            alt=""
            width={15}
          />
        </a>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 bottom-0 right-0 ${
          sidebarOpen ? "w-60 pl-10" : "w-0 overflow-hidden"
        } min-h-screen flex flex-col bg-primary dark:bg-black dark:text-primary text-black pt-20 transition-all overflow-y-auto`}
      >
        <img
          src={theme === "dark" ? HouseOfBerryAssets.close_icon_dark : HouseOfBerryAssets.close_icon}
          alt="Close Sidebar Icon"
          className="w-7 h-7 absolute right-4 top-11 cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <div className="py-6"></div>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.href);
            }}
            className={`text-lg mb-4 hover:text-pink-400 transition-colors ${
              activeLink === link.href ? "text-pink-400" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
