import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-1 bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-10 grid sm:grid-cols-2 gap-5'>
          <a
            href='tel:9354628240'
            className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:text-[#915EFF]'
          >
            9354628240
          </a>
          <a
            href='mailto:madhav201singh@gmail.com'
            className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:text-[#915EFF]'
          >
            madhav201singh@gmail.com
          </a>
          <a
            href='https://github.com/madhavsingh2002'
            target='_blank'
            rel='noreferrer'
            className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:text-[#915EFF]'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/madhav-singh-315917213/'
            target='_blank'
            rel='noreferrer'
            className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium hover:text-[#915EFF]'
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
