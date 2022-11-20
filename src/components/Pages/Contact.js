import React from "react";
import { motion } from 'framer-motion';

import Form from '../form/Form'

const Contact = () => {
  return(
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <h1>contact.</h1>
    <p>If you have any questions, please contact me.</p>
    <Form />
  </motion.div>
  )
}

export default Contact;