

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';


import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <motion.div variants={textVariant()} className="text-center">
    <p className={`${styles.sectionSubText} text-lg text-primary tracking-wide`}>
    
    </p>
    <h2
      className={`${styles.sectionHeadText} text-4xl font-extrabold text-gradient bg-clip-text font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent `}
    > Introduction 
  Overview.
    </h2>
  </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies like Node.js, Express, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
