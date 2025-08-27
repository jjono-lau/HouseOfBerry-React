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
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-primary dark:bg-black pt-10 sm:pt-10 mt-20 sm:mt-40 px-10 sm:px-10 lg:px-15 xl:px-20">
      {/* Footer top */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-10">
        {/* Left column: Logo + About */}
        <div className="text-sm text-gray-600 dark:text-gray-400 w-full lg:max-w-[45%] flex flex-col justify-start">
          
          <div className="w-full flex justify-center lg:justify-start">
            <img
              src={
                theme === "dark"
                  ? HouseOfBerryAssets.logo_dark
                  : HouseOfBerryAssets.logo
              }
              className="w-32 sm:w-44"
              alt="House of Berry Logo"
            />
          </div>

          <p className="mt-3">
            House of Berry isn't just about coffee or matcha. It's about turning
            everyday moments into something special — one sip at a time. Every
            drink is crafted with care, using the highest quality ingredients.
          </p>
        </div>

        {/* Right column: TikTok + Navbar links */}
        <div className="flex flex-col w-full gap-6 justify-between">
          {/* TikTok section (half-and-half) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Left half: heading + paragraph */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center">
              <h3 className="font-semibold">Follow Me On TikTok</h3>
              <p className="text-sm mt-1">
                Check me out on TikTok for fun content and updates!
              </p>
            </div>

            {/* Right half: button */}
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
  <a
    href="https://www.tiktok.com/@houseofberrynz"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto inline-flex justify-center sm:justify-start items-center gap-2 bg-pink-300 hover:bg-pink-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded px-6 py-3"
  >
    <img
      src={BrandAssets.tiktok_circle}
      className="h-8"
      alt="TikTok Logo"
    />
    Follow me on TikTok @houseofberrynz
  </a>
</div>

          </div>

          {/* Navbar links */}
          <ul className="flex flex-wrap gap-4 sm:gap-8 text-sm justify-between w-full">
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
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Footer bottom */}
      <div className="pb-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row justify-center sm:justify-between gap-4 flex-wrap items-center">
        <p>Copyright 2025 &copy; HouseOfBerry - All Right Reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href='#placeholder'target="_blank" rel="noopener noreferrer" ><img className="h-8" src={BrandAssets.fb} alt="Facebook Logo" /></a>
          <a href='https://www.instagram.com/houseofberrynz/'target="_blank" rel="noopener noreferrer" ><img className="h-8" src={BrandAssets.ig} alt="Instagram Logo" /> </a>
          <a href='https://www.linkedin.com/in/jjacquelinejiang/'target="_blank" rel="noopener noreferrer" > <img className="h-8" src={BrandAssets.ln} alt="LinkedIn Logo" /> </a>
          <a href='#placeholder' target="_blank" rel="noopener noreferrer" ><img
            className="h-8"
            src={
              theme === "dark"
                ? BrandAssets.x_logo_white
                : BrandAssets.x_logo_black
            }
            alt="X/Twitter Logo"
          /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
