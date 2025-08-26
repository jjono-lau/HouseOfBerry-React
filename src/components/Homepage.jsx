import React from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import { motion } from "motion/react";



// A Homepage section is the prominent visual element that appears “above the fold”—meaning it’s visible without scrolling—at the top of a webpage, typically spanning the entire screen. It’s the first content visitors see when landing on your website, making it crucial for establishing your brand’s identity and conveying your core message.


const Homepage = () => {
  return (
    <div
  id="home"
  className="pb-30 flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full  overflow-hidden text-gray-700 dark:text-primary">


      {/* Group Profiles */}Homepage.jsx file  to be changed :))

      <motion.div 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.6}}
      viewport={{once: true}}
      className="inline-flex items-center gap-2 border border-black-300 p-1.5 pr-4 rounded-full">
        <img className="w-15" src={HouseOfBerryAssets.matchaLeaf} alt="" />
        <p className="text-s font-medium">Presented by House Of Berry</p>
      </motion.div>


        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.7 }}
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

  {/* decorative image centered vertically, responsive inset from right */}
  <img
    src={HouseOfBerryAssets.bgImage2}
    alt=""
    className="absolute top-1/2 -translate-y-1/2 
               right-10 sm:right-6 md:right-10 lg:right-50 xl:right-10
               w-[18vw] max-w-[200px] min-w-[100px]
               opacity-30 -z-10 dark:hidden"
  />
</motion.h1>


      
      <motion.h3
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:1}}
      viewport={{once: true}}
       className="italic text-lg text-glow">House of Berry isn't just about coffee or matcha. It's about turning<br/> everyday moments into something special &mdash; one sip at a time.</motion.h3> 
    

    <motion.div
    initial={{opacity:0, scale:0.8}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1, delay:0.9}}
      viewport={{once: true}}

     className='relative flex justify-center'>
        <img src={HouseOfBerryAssets.coffee} alt="" className='w-full max-w-6xl'/>
    </motion.div>

    </div>
  );
};

export default Homepage;
