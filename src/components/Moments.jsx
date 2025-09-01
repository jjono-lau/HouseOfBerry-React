import React from "react";
import { motion } from "motion/react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import Title from "./Title";

const Moments = () => {
  return (
    <motion.div
    id='moments'
      className="pb-30 bg-white dark:bg-gray-600 flex flex-col items-center gap-5 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-primary"
    >
      <Title 
        title="Matcha Moments" 
        desc="Discover the little joys in every sip. From our handcrafted matcha and coffee to behind-the-scenes moments, see how we turn everyday routines into memorable experiences."
      />

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">
        {/* Instagram Post 1 */}
        <div className="w-[325px] h-[530px]">
          <InstagramEmbed 
            url="https://www.instagram.com/p/DM525hry4l7/?utm_source=ig_web_copy_link&igsh=MWlvcjNvd2MzYzNjeQ==" 
            width={328} 
          />
        </div>

        {/* Instagram Post 2 */}
        <div className="w-[325px] h-[530px]">
          <InstagramEmbed 
            url="https://www.instagram.com/p/DMnC07Up7Je/?utm_source=ig_web_copy_link&igsh=MWtrOXd6NjhobnJoMQ==" 
            width={328} 
          />
        </div>

        {/* Video */}
        <div className="w-[325px] h-[530px] overflow-hidden">
          <video
            src={HouseOfBerryAssets.about_vid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* TikTok */}
        <div className="w-[325px] h-[530px] overflow-hidden">
          <TikTokEmbed 
            url="https://www.tiktok.com/@houseofberrynz/video/7539436181923040519?is_from_webapp=1&sender_device=pc" 
            width={325} 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Moments;
