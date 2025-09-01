import React from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import { motion } from "motion/react";

const HomePage = () => {
  const smallScreenImages = [
    HouseOfBerryAssets.stall,
    HouseOfBerryAssets.xoxoMatcha,
    
    HouseOfBerryAssets.LYSMatchapink,
    HouseOfBerryAssets.stall,
  ];

  const largeScreenImages = [
    HouseOfBerryAssets.stall,
    HouseOfBerryAssets.xoxoMatcha,
    HouseOfBerryAssets.stall,
    HouseOfBerryAssets.LYSMatchapink,
    
    HouseOfBerryAssets.LYSMatchapink,
    HouseOfBerryAssets.stall,
    HouseOfBerryAssets.LYSMatchapink,
    HouseOfBerryAssets.stall,
  ];

  return (
    <div id="home">
      
      

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3 }}
  viewport={{ once: true }}
  className="w-full sm:hidden"
>
  <div className="grid grid-cols-2 border-b border-pink-100 dark:border-none">
    {smallScreenImages.map((src, i) => (
      <div key={i} className="relative aspect-square">
        <img src={src} alt={`wall-sm-${i}`} className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
</motion.div>


<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3 }}
  viewport={{ once: true }}
  className="w-full hidden sm:block"
>
  <div className="grid grid-cols-4 border-b border-pink-100 dark:border-none">
    {largeScreenImages.map((src, i) => (
      <div key={i} className="relative aspect-square">
        <img src={src} alt={`wall-lg-${i}`} className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
</motion.div>

     
     
     
     
     
      <div className="bg-primary dark:bg-gray-600 pb-30 flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-primary">
       
       
       
       
        {/* Little Header Image with encasing / not needed in final potentially */}
        {/*               
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-black-300 p-1.5 pr-4 rounded-full"
      >
        <img className="w-15" src={HouseOfBerryAssets.matchaLeaf} alt="" />
        <p className="text-s font-medium">Presented by House Of Berry</p>
      </motion.div> */}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative text-4xl sm:text-5xl md:text-6xl xl:text-[84px] 
                   font-medium xl:leading-[95px] max-w-5xl"
        >
          Serving{" "}
          <span className="bg-gradient-to-b from-[#4CAF50] to-[#A8E6A3] bg-clip-text text-transparent">
            Matcha
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-t from-[#4B2E2A] to-[#C19A6B] bg-clip-text text-transparent">
            Coffee
          </span>{" "}
          with love,
          <br /> and on the go
          <img
            src={HouseOfBerryAssets.bgImage2}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 
                     right-10 sm:right-6 md:right-10 lg:right-50 xl:right-10
                     w-[18vw] max-w-[200px] min-w-[100px]
                     opacity-30 -z-10 dark:hidden"
          />
        </motion.h1>

        {/* Subheadline */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="italic text-lg text-glow"
        >
          House of Berry isn't just about coffee or matcha. It's about turning
          <br /> everyday moments into something special — one sip at a time.
        </motion.h3>
      </div>
    </div>
  );
};

export default HomePage;
