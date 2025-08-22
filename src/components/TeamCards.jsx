import React from "react";
import Title from "./Title";
import { teamData } from "../HouseOfBerryAssets/HouseOfBerryAssets";

const TeamCards = () => {
  return (
    <div id="team" className="flex flex-col items-center gap-7 p-4 sm:px-12 lg:px-24 xl:px-40 scroll-mt-30 text-gray-800 dark:text-white">
      <Title title="TeamCards" desc="Come Meet Our Team" />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:birder-gray-700 bg-white dark:bg-gray-700 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
          <img src={team.image} alt={team.name} className="w-12 h-12 rounded-full "/>
          <div className="flex1">
            <h3 className="text-md font-bold">{team.name}</h3>
            <p className="text-s opacity-70">{team.title}</p>
          </div>
                
          </div>
          ))}
      </div>
    </div>
  );
};

export default TeamCards;
