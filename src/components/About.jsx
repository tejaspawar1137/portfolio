import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="relative">
        <p className={`${styles.sectionSubText} green-pink-gradient-text`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} green-pink-gradient-text`}>Overview.</h2>
        <div className="absolute bottom-0 left-0 w-40 h-1 green-pink-gradient rounded-full" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Reactjs Developer | Full Stack Developer | 3+ Years of Experience | Expertise in Building Scalable, Efficient, and User-Centric Applications to Solve Complex Business Challenges | Proficient in Front-End & Back-End Development
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Add a gradient divider */}
      <div className="w-full h-[2px] green-pink-gradient mt-16 rounded-full" />
    </>
  );
};

// You'll need to add these CSS classes to your styles file
// Add this to your CSS/Tailwind setup:
/*
.green-pink-gradient-text {
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.green-pink-gradient {
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
}
*/

export default SectionWrapper(About, "about");