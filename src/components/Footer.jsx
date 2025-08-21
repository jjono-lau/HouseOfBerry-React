import React from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import BrandAssets from "../BrandAssets/BrandAssets";

const Footer = ({ theme }) => {
  return (
    <div className="bg-primary dark:bg-black pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* footer top */}
      <div className="flex justify-between lg:items-end max-lg:flex-col gap-10">
        <div className="space-y-5 text-sm text-gray-600 dark:text-gray-400">
          <img
            src={
              theme === "dark"
                ? HouseOfBerryAssets.logo_dark
                : HouseOfBerryAssets.logo
            }
            className="w-32 sm:w-44"
            alt=""
          />
          <p className="max-w-md">
            House of Berry isn't just about coffee or matcha. It's about turning
            everyday moments into something special — one sip at a time.
          </p>
          <ul className="flex gap-8">
            <li>
              <a className="hover:text-pink-400" href="#hero">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400" href="#offerings">
                OFFERINGS
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400" href="#team">
                TEAM
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400" href="#faq">
                FAQS
              </a>
            </li>
            <li>
              <a className="hover:text-pink-400" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Join Our Mailing List</h3>
          <p className="text-sm mt-2 mb-6">
            The latest updates on my journey to bringing the best matcha to New
            Zealand. With secret menu drops, you can't miss!
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-sm outline-none rounded text-gray-800 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-400"
            />
            <button className="bg-gray-600 text-primary rounded px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      {/* footer bottom */}
      <div className="pb-6 text-sm text-gray-500 dark:text-gray-400 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2025 &copy; HouseOfBerry - All Right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img className="h-8" src={BrandAssets.fb} alt="Facebook Logo" />
          <img className="h-8" src={BrandAssets.ig} alt="Instagram Logo" />
          <img className="h-8" src={BrandAssets.ln} alt="Linkdn Logo" />
          <img
            className="h-8"
            src={theme==='dark' ? BrandAssets.x_logo_white:BrandAssets.x_logo_black}
            alt="Twitter X Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
