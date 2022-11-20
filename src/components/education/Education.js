import React from "react";
import { motion } from "framer-motion";

import Card from "../UI/Card";
import ubLogo from "../../images/ub_logo.jpg";
import upcLogo from "../../images/upc-ID.gif";
import classes from "./Education.module.css";
import Certificates from "./Certificates";

const Education = () => {
  return (
    <div className={classes.education}>
      <div className="toque_color">
        <h3 className="title-color">EDUCATION</h3>
      </div>
      <p>My higher education:</p>

      <div className={classes.education_box}>
        <motion.a
          href={"https://www.upc.edu/en?set_language=en"}
          target="_blank"
          className={classes.degree}
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ duration: 1 }}
          onViewportEnter={{ x: 0 }}
        >
          <Card>
            <img src={upcLogo} alt="Logo UPC" height="150px"></img>
            <h5>Universitat Politècnica de Catalunya</h5>
            <h2>Bachelor of Engineering </h2>
            <h3>Electrical and Electronics Engineering</h3>
            <p>2005-2010</p>
          </Card>
        </motion.a>

        <motion.a
          href={"https://www.ub.edu/web/portal/en/"}
          target="_blank"
          className={classes.degree}
          animate={{ x: 0 }}
          initial={{ x: 200 }}
          transition={{ duration: 1 }}
        >
          <Card>
            <img src={ubLogo} alt="Logo UB" height="150px"></img>
            <h5>Universitat de Barcelona</h5>
            <h2>Master of Science </h2>
            <h3>Bioengineering and Biomedical Engineering</h3>
            <p>2011-2016</p>
          </Card>
        </motion.a>
      </div>
      <div className="toque_color">
        <h3 className="title-color">CERTIFICATES</h3>
      </div>

      <p>My certificates and courses:</p>
      <Certificates />
    </div>
  );
};

export default Education;
