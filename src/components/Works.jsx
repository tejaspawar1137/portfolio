import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative'
      >
        {/* Gradient border */}
        <div className="absolute inset-0 p-[1px] rounded-2xl green-pink-gradient opacity-30"></div>
        <div className="relative z-10">
          <div 
            className='relative w-full h-[230px] overflow-hidden rounded-2xl group' 
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <div className='absolute inset-0 green-pink-gradient opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10 flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>View Project</span>
            </div>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110'
            />
          </div>

          <div className='mt-5'>
            <h3 className='green-pink-gradient-text font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className='text-[14px] green-pink-gradient-text font-medium'
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} green-pink-gradient-text`}>My work</p>
        <h2 className={`${styles.sectionHeadText} green-pink-gradient-text`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] border-l-4 green-pink-gradient-border pl-4'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00cea8]/10 to-[#bf61ff]/5 -z-10 opacity-30"></div>
    </>
  );
};

// Make sure to add these CSS classes to your global stylesheet
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

export default SectionWrapper(Works, "");