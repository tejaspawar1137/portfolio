import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} green-pink-gradient-text`}>Technologies</p>
        <h2 className={`${styles.sectionHeadText} green-pink-gradient-text`}>Skills.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mb-12 text-secondary text-[17px] max-w-3xl leading-[30px] border-l-4 green-pink-gradient-border pl-4'
      >
        These are the technologies I've worked with and have experience using in my projects.
      </motion.p>
      
      <div className='flex flex-row flex-wrap justify-center gap-10 relative'>
        {/* Gradient background elements */}
        <div className="absolute top-0 left-0 w-full h-full green-pink-gradient opacity-5 rounded-3xl -z-10"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00cea8]/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#bf61ff]/20 rounded-full blur-3xl -z-10"></div>
        
        {technologies.map((technology, index) => (
          <motion.div 
            className='w-28 h-28 relative group' 
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="hidden"
            animate="show"
          >
            <div className="absolute inset-0 p-[1px] rounded-full green-pink-gradient opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 green-pink-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
            <BallCanvas icon={technology.icon} />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 green-pink-gradient-text font-medium text-sm whitespace-nowrap">
              {technology.name}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00cea8]/10 to-[#bf61ff]/5 -z-10 opacity-30"></div>
    </>
  );
};

// Make sure you have these CSS classes in your global stylesheet:
/*
.green-pink-gradient {
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
}

.green-pink-gradient-text {
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.green-pink-gradient-border {
  border-image: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%) 1;
}
*/

export default SectionWrapper(Tech, "");