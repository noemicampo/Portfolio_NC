import React from "react";
import { motion } from "framer-motion";

import Skills from "../skills/Skills";
import Education from "../education/Education";
import IntroAbout from "../education/IntroAbout";

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <div id="about">
        <IntroAbout />
      </div>
      
      <div id="education">
        <Education />
      </div>

      <div id="skills">
        <Skills />
         
      </div>
    
    </motion.div>
  );
};

export default About;
