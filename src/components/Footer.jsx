import React from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import BrandAssets from "../BrandAssets/BrandAssets";

const Footer = ({ theme }) => {
  const footerLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#offerings", label: "OFFERINGS" },
    { href: "#team", label: "TEAM" },
    { href: "#faq", label: "FAQS" },
    { href: "#contact", label: "CONTACT" },
  ];

  const handleClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-primary dark:bg-black pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* Footer top */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Logo + About + Nav */}
        <div className="space-y-5 text-sm text-gray-600 dark:text-gray-400 w-full lg:w-auto">
          <img
            src={theme === "dark" ? HouseOfBerryAssets.logo_dark : HouseOfBerryAssets.logo}
            className="w-32 sm:w-44"
            alt="House of Berry Logo"
          />
          <p className="max-w-md">
            House of Berry isn't just about coffee or matcha. It's about turning everyday moments into something special — one sip at a time.
          </p>
          <ul className="flex flex-wrap gap-4 sm:gap-8 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="hover:text-pink-400 text-gray-600 dark:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mailing list */}
        <div className="text-gray-600 dark:text-gray-400 w-full lg:w-96">
          <h3 className="font-semibold">Join Our Mailing List</h3>
          <p className="text-sm mt-2 mb-4">
            The latest updates on my journey to bringing the best matcha to New Zealand. With secret menu drops, you can't miss!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full sm:flex-1 p-3 text-sm outline-none rounded text-gray-800 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-400"
            />
            <button className="w-full sm:w-auto bg-gray-600 text-primary rounded px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Footer bottom */}
      <div className="pb-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row justify-center sm:justify-between gap-4 flex-wrap items-center">
        <p>Copyright 2025 &copy; HouseOfBerry - All Right Reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <img className="h-8" src={BrandAssets.fb} alt="Facebook Logo" />
          <img className="h-8" src={BrandAssets.ig} alt="Instagram Logo" />
          <img className="h-8" src={BrandAssets.ln} alt="LinkedIn Logo" />
          <img
            className="h-8"
            src={theme === "dark" ? BrandAssets.x_logo_white : BrandAssets.x_logo_black}
            alt="X/Twitter Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
