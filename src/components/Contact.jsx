import React from "react";
import Title from "./Title";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";

const Contact = () => {
  return (
    <div id='contact' className="flex flex-col items-center gap-7 p-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
      <Title title="Catch The Cart" desc="We'd love to hear from you!" />

      <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
        <div>
          <p className="text-sm font-semibold mb-2">Your Name</p>
          <div>
            <img src={HouseOfBerryAssets.sun_icon} alt='' />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"/>
          </div>
        </div>
      </form>


    </div>
  )
}

export default Contact
