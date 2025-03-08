import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "1px solid rgba(0, 0, 0, 0)",
        backgroundClip: "padding-box",
        boxShadow: "0 0 15px rgba(0, 206, 168, 0.3), 0 0 15px rgba(191, 97, 255, 0.3)"
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #1d1836, inset 0 0 0 1px rgba(0, 0, 0, 0), 0 0 0 2px rgba(0, 206, 168, 0.5), 0 0 0 4px rgba(191, 97, 255, 0.5)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="relative">
        <p className={`${styles.sectionSubText} green-pink-gradient-text text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} green-pink-gradient-text text-center`}>
          Work Experience.
        </h2>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-40 h-1 green-pink-gradient rounded-full" />
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(191, 97, 255, 0.6)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      
      {/* Add a gradient divider at the bottom */}
      <div className="w-full h-[2px] green-pink-gradient mt-16 rounded-full" />
    </>
  );
};

// Make sure you have these CSS classes from the About component:
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

export default SectionWrapper(Experience, "work");