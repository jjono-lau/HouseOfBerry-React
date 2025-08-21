import React from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";



// A hero section is the prominent visual element that appears “above the fold”—meaning it’s visible without scrolling—at the top of a webpage, typically spanning the entire screen. It’s the first content visitors see when landing on your website, making it crucial for establishing your brand’s identity and conveying your core message.


const Hero = () => {
  return (
    <div
  id="hero"
  className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full  overflow-hidden text-gray-700 dark:text-primary">


      {/* Group Profiles */}Hero.jsx file  to be changed :))

      <div className="inline-flex items-center gap-2 border border-black-300 p-1.5 pr-4 rounded-full">
        <img className="w-15" src={HouseOfBerryAssets.matchaLeaf} alt="" />
        <p className="text-s font-medium">Presented by House Of Berry</p>
      </div>


        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">Serving <span className="bg-gradient-to-b from-[#4CAF50] to-[#A8E6A3] bg-clip-text text-transparent">Matcha</span> and <span className="bg-gradient-to-t from-[#4B2E2A] to-[#C19A6B] bg-clip-text text-transparent">Coffee</span> with love, <br/> and on the go</h1>
      
      <p className="italic text-glow">House of Berry isn't just about coffee or matcha. It's about turning<br/> everyday moments into something special &mdash; one sip at a time.</p> 
    

    <div className='relative'>
        <img src={HouseOfBerryAssets.coffee} alt="" className='w-full max-w-6xl'/>
        <img src={HouseOfBerryAssets.bgImage2} about="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
    </div>

    </div>
  );
};

export default Hero;
