import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tejas Pawar",
          from_email: form.email,
          to_email: "tejaspawar183@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl border border-opacity-30 green-pink-gradient-border'
      >
        <div className="relative">
          <p className={`${styles.sectionSubText} green-pink-gradient-text`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText} green-pink-gradient-text`}>Contact.</h3>
          <div className="absolute bottom-[-10px] left-0 w-40 h-1 green-pink-gradient rounded-full" />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-gradient'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-gradient'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-gradient'
            />
          </label>

          <button
            type='submit'
            className='green-pink-gradient py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 hover:shadow-lg hover:shadow-[#00cea8]/50'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative'
      >
        {/* Add a subtle gradient glow behind the Earth */}
        <div className="absolute inset-0 w-full h-full opacity-30 blur-xl green-pink-gradient rounded-full z-0"></div>
        <div className="relative z-10 w-full h-full">
          <EarthCanvas />
        </div>
      </motion.div>
      
      {/* Add gradient divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] green-pink-gradient"></div>
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

.green-pink-gradient-border {
  border-image: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%) 1;
}

.focus\:ring-gradient:focus {
  box-shadow: 0 0 0 2px rgba(0, 206, 168, 0.5), 0 0 0 4px rgba(191, 97, 255, 0.5);
}
*/

export default SectionWrapper(Contact, "contact");