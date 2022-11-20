import React from 'react';
import { motion } from "framer-motion";


import { Welcome } from '../introHome/Welcome';
import { LastWork } from '../introHome/LastWork';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <div>
      <Welcome />
      <LastWork />
    </div>
    </motion.div>
  );
};

export default Home;