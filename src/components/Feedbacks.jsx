import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full relative overflow-hidden'
  >
    {/* Add subtle gradient border */}
    <div className="absolute inset-0 p-[1px] rounded-3xl green-pink-gradient opacity-30"></div>
    <div className="relative z-10">
      <p className='text-white font-black text-[48px] green-pink-gradient-text'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='green-pink-gradient-text'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <div className="relative">
            {/* Gradient ring around image */}
            <div className="absolute inset-0 p-[2px] rounded-full green-pink-gradient"></div>
            <img
              src={image}
              alt={`feedback_by-${name}`}
              className='w-10 h-10 rounded-full object-cover relative z-10'
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] relative overflow-hidden`}>
      {/* Gradient border for the entire section */}
      <div className="absolute inset-0 p-[1px] rounded-[20px] green-pink-gradient opacity-30"></div>
      
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] relative`}
      >
        {/* Gradient overlay at the bottom of the header */}
        <div className="absolute bottom-0 left-0 w-full h-1 green-pink-gradient"></div>
        
        <motion.div variants={textVariant()} className="relative">
          <p className={`${styles.sectionSubText} green-pink-gradient-text`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} green-pink-gradient-text`}>Testimonials.</h2>
          <div className="absolute bottom-[-10px] left-0 w-40 h-1 green-pink-gradient rounded-full"></div>
        </motion.div>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 relative z-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      
      {/* Add gradient divider at bottom */}
      <div className="w-full h-[2px] green-pink-gradient mt-4 mb-8"></div>
    </div>
  );
};

// Make sure you have these CSS classes from the previous components:
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

export default SectionWrapper(Feedbacks, "");