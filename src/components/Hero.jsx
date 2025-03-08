import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-gradient-to-b from-[#050816] via-[#081b11] to-[#050816]`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full green-pink-gradient' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00cea8] via-[#bf61ff] to-transparent' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='green-pink-gradient-text'>Tejas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Gradient orb decorations */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-[#00cea8]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-[#bf61ff]/5 rounded-full blur-3xl -z-10"></div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-opacity-20 backdrop-blur-sm bg-[#081b11] relative'>
            {/* Gradient border effect */}
            <div className="absolute inset-0 p-[1px] -m-[4px] rounded-3xl green-pink-gradient opacity-20"></div>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full green-pink-gradient mb-1'
            />
          </div>
        </a>
      </div>
    </section>
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

export default Hero;