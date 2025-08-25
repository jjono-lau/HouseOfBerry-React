import React from 'react'
import { motion } from "motion/react";


const Title = ({title, desc}) => {
  return (
    <motion.div 
          initial={{scale:0.7}}
      whileInView={{scale:1}}
      transition={{duration:0.5}}
      viewport={{once:true}}  className = "z-2">
     
      <>
       <h2 className="pt-10 pb-10 text-7xl sm:text-8xl font-medium text-center">{title}</h2>

        <h3 className='max-w-l text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</h3>
      </>
    </motion.div>
  )
}

export default Title

