import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
  id="hero"
  className="flex flex-col items-center gap-5 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center w-full  overflow-hidden text-gray-700 dark:text-primary">

      <div className="inline-flex items-center gap-2 border border-black-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={assets.group_profile} alt="Group Profiles" />
        <p className="text-xs font-medium">Trusted by 10k people</p>
      </div>


        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">Serving <span className="bg-gradient-to-b from-[#4CAF50] to-[#A8E6A3] bg-clip-text text-transparent">Matcha</span> and <span className="bg-gradient-to-t from-[#4B2E2A] to-[#C19A6B] bg-clip-text text-transparent">Coffee</span> with love, <br/> and on the go</h1>
      
      <p className="italic text-glow">House of Berry isn't just about coffee or matcha. It's about turning<br/> everyday moments into something special &mdash; one sip at a time.</p> 
    

    <div className='relative'>
        <img src={assets.coffee} alt="" className='w-full max-w-6xl'/>
        <img src={assets.bgImage2} about="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
    </div>

    </div>
  );
};

export default Hero;
