import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";

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

  // Scroll listener to update active link based on section position
  useEffect(() => {
    const handleScroll = () => {
      let current = activeLink;
      let minDistance = Infinity;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const distance = Math.abs(section.getBoundingClientRect().top - 100); // navbar offset
          if (distance < minDistance) {
            minDistance = distance;
            current = link.href;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll when clicking links and remove #id from URL
  const handleClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // adjust for navbar height
        behavior: "smooth",
      });

      setActiveLink(href);

      // Remove the hash from URL without reloading
      window.history.replaceState(null, "", " ");

      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-primary dark:bg-black">
      
      {/* Logo */}
      <a href="#home" className="relative z-30" onClick={(e) => { e.preventDefault(); handleClick("#home"); }}>
        <img
          src={theme === "dark" ? HouseOfBerryAssets.logo_dark : HouseOfBerryAssets.logo}
          className="w-22 h-auto flex-shrink-0"
          alt="House of Berry Logo"
        />
      </a>

      {/* Desktop links */}
      <div className="hidden sm:flex items-center gap-5 dark:text-primary">
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

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <DarkMode theme={theme} setTheme={setTheme} />

        {/* Mobile menu icon */}
        <img
          src={theme === "dark" ? HouseOfBerryAssets.menu_icon_dark : HouseOfBerryAssets.menu_icon}
          alt="Mobile Menu Icon"
          className="w-7 h-7 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />

        {/* Desktop Offering button */}
        <a
          href="#offerings"
          className="text-lg max-sm:hidden flex items-center gap-5 bg-pink-300 dark:bg-gray-700 text-black dark:text-primary px-6 py-1.5 rounded-full cursor-pointer hover:scale-103 transition-all"
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

      {/* Mobile sidebar */}
      <div
        className={`sm:hidden fixed top-0 bottom-0 right-0 ${
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
    </div>
  );
};

export default Navbar;
