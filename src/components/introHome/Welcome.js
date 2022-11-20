import React from "react";

import NoemiFondo from "./../../images/Noemi_ProcreateR.png";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="intro">
      <div className="welcome-full">
        <h1 className="welcome"> Welcome!</h1>
        <h2 className="im"> I'm Noemi Campo</h2>
        <p className="fullstack">Full Stack Developer</p>
        <p className="welcome-text">
          I'm so glad that you are visiting my portfolio. Feel free to check my
          work and contact me!
        </p>
      </div>
      <div>
        <img src={NoemiFondo} alt="Noemi Campo" className="img-welcome" />
      </div>
    </div>
  );
};
