import React from "react";
import Title from "./Title";
import { teamData } from "../HouseOfBerryAssets/HouseOfBerryAssets";
import { motion } from "motion/react";


const TeamCards = () => {
  return (
    <div 
      

    id="team" className="pb-30 flex flex-col items-center gap-7 p-4 sm:px-12 lg:px-24 xl:px-40 scroll-mt-30 text-gray-800 dark:text-white">
      <Title title="TeamCards" desc="Come Meet Our Team" />
      <p> Add a potential search bar and change this to ingridient list and where its sourced?
      teamcards.jsx file</p>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <motion.div
           initial={{opacity:1, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.1, delay: index * 0.1}}
      viewport={{once:true}}
           key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:birder-gray-700 bg-white dark:bg-gray-700 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
          <img src={team.image} alt={team.name} className="w-12 h-12 rounded-full "/>
          <div className="flex1">
            <h3 className="text-md font-bold">{team.name}</h3>
            <p className="text-s opacity-70">{team.title}</p>
          </div>
                
          </motion.div>
          ))}
      </div>
    </div>
  );
};

export default TeamCards;
