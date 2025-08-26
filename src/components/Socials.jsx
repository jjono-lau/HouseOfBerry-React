import React from "react";
import { motion } from "motion/react";
import {
  InstagramEmbed,
  TikTokEmbed,
} from "react-social-media-embed";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="pb-30 bg-primary dark:bg-gray-600 flex flex-col items-center gap-5 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-primary"
    >
      <h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
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

      <p className="italic">
        House of Berry isn't just about coffee or matcha. It's about turning
        <br /> everyday moments into something special &mdash; one sip at a time.
      </p>



      <div
        className="flex items-center justify-center flex-wrap gap-10 m-4"
      >
    

<div className='flex justify-center items-center hide-cursor'>
  <InstagramEmbed  url="https://www.instagram.com/p/DM525hry4l7/?utm_source=ig_web_copy_link&igsh=MWlvcjNvd2MzYzNjeQ=="  width={328} />
</div>

<div className='flex justify-center items-center hide-cursor'>
  <InstagramEmbed  url="https://www.instagram.com/p/DMnC07Up7Je/?utm_source=ig_web_copy_link&igsh=MWtrOXd6NjhobnJoMQ==" width={328} />
</div>

  <video
  src={HouseOfBerryAssets.about_vid}
  className=" w-[328px]  flex justify-center items-center"
  autoPlay
  loop
  muted
  playsInline
/>

        <div className='flex justify-center items-center h-[583px] overflow-hidden hide-cursor'>
          <TikTokEmbed url="https://www.tiktok.com/@houseofberrynz/video/7539436181923040519?is_from_webapp=1&sender_device=pc" width={325} />
        </div>

        {/* <div className='flex justify-center'>
          <TikTokEmbed url="https://www.tiktok.com/@houseofberrynz/video/7486019102369172743?is_from_webapp=1&sender_device=pc"  width={325} />
        </div> */}
        
        
      </div>


      
    </motion.div>
  );
};

export default Socials;
