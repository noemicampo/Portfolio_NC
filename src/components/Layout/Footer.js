import classes from "./Footer.module.css";

import linkedinImage from "../../images/linkedin-in.svg";
import githubImage from "../../images/github.svg";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <a
          href="https://www.linkedin.com/in/noemi-campo-4a7381240/"
          target="_blank"
          rel="noreferrer"
          title="Connect with me on Linkedin"
          className="nav-links"
        >
          <img src={linkedinImage} alt="Connect with me on Linkedin" />
        </a>
        <a
          href="https://github.com/noemicampo"
          target="_blank"
          rel="noreferrer"
          title="Connect with me on Github"
          className="nav-links"
        >
          <img src={githubImage} alt="Connect with me on GitHub" />
        </a>
      </div>
      <p> ©️ 2022 Noemi Campo - All rights reserved</p>
    </footer>
  );
};

export default Footer;
