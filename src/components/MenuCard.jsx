import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";



const MenuCard = ({ menuData, index }) => {
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // ignore mobile
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay: index * 0.2}}
      viewport={{once:true}}

      className="flex relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => !isMobile && setVisible(true)}
      onMouseLeave={() => !isMobile && setVisible(false)}
      onMouseMove={handleMouseMove}
      ref={divRef}
    >
      {/* Gradient Background */}
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-600 via-pink-400 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500  ${
          visible || isMobile ? "opacity-60" : "opacity-0"
        } ${isMobile ? "animate-pulse-gradient" : ""}`}
        style={{
          top: isMobile ? "50%" : position.y - 150,
          left: isMobile ? "50%" : position.x - 150,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 rounded-[10px] border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-900 w-[calc(100%-8px)] h-[calc(100%-8px)] p-8 flex items-center gap-6 mx-auto my-1">
        <div className="flex-1">
          <img
            src={menuData.icon}
            alt="Menu Items"
            className="max-w-24 bg-none m-2"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold">{menuData.title}</h1>
          <p className="text-sm mt-2">{menuData.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
