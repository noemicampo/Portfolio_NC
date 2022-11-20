
import React from 'react';
import { motion } from 'framer-motion';

import Projects from '../projects/Projects'

const Portfolio = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <h1>portfolio.</h1>
      <p>Check out some of my latest case studies. You can visit the
         projects website as well as take a look at the code on GitHub. </p>
      <Projects />
    </motion.div>
  );
};

export default Portfolio;