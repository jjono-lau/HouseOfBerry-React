import React from "react";
import { asset_logos } from "../HouseOfBerryAssets/HouseOfBerryAssets";

const Serving = () => {
  return (
    <div className="pb-30 bg-primary dark:bg-gray-600 flex flex-col items-center gap-5 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center w-full  overflow-hidden text-gray-700 dark:text-primary">
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Serving{" "}
        <span className="bg-gradient-to-b from-[#4CAF50] to-[#A8E6A3] bg-clip-text text-transparent">
          Matcha
        </span>{" "}
        and{" "}
        <span className="bg-gradient-to-t from-[#4B2E2A] to-[#C19A6B] bg-clip-text text-transparent">
          Coffee
        </span>{" "}
        with love, <br /> and on the go
      </h1>

      {/* <p className="italic text-glow">
        House of Berry isn't just about coffee or matcha. It's about turning
        <br /> everyday moments into something special &mdash; one sip at a
        time.
      </p> */}

      <p className="italic">
        House of Berry isn't just about coffee or matcha. It's about turning
        <br /> everyday moments into something special &mdash; one sip at a
        time.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {asset_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Serving;
