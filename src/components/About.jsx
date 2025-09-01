import React from "react";
import Title from "./Title";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import { motion } from "motion/react";
import { teamData } from "../HouseOfBerryAssets/HouseOfBerryAssets";

const About = () => {
  const aboutData = [
    {
      title: "Our Mission",
      description:
        "To create a unique matcha experience that combines quality, flavor, and fun with every sip.",
      image: HouseOfBerryAssets.xoxoMatcha,
    },
    {
      title: "Our Values",
      description:
        "We value quality, sustainability, and community. Our matcha is sourced from Japan and handled with care.",
      image: HouseOfBerryAssets.LYSMatchapink,
    },
    {
      title: "Our Story",
      description:
        "Founded in 2025, House of Berry started as a passion project to bring the best matcha to our community.",
      image: HouseOfBerryAssets.logo,
    },
  ];

  return (
    <div
 
      id="about"
      className="pb-30 flex flex-col items-center gap-7  px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-primary scroll-mt-30"
    >
      <Title        
    title="About Us" desc="Learn more about our mission and values." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {aboutData.map((about, index) => (
          <motion.div
            initial={{ scale:0.5 }}
            whileInView={{  scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{once:true}}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img
              src={about.image}
              alt={about.title}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{about.title}</h3>
            <p className="text-md opacity-90 w-5/6">{about.description}</p>
          </motion.div>
        ))}
      </div>

       <Title desc="Come Meet Our Team" />
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

export default About;
