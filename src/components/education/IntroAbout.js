import React from "react";

import "./IntroAbout.css";
import NoemiImg from "../../images/NoemiCampo_cuadrado.png";

const IntroAbout = () => {
  return (
    <div className="intro-general">
      <h1>about.</h1>
      <h4>I'm a Full Stack Developer based in Barcelona, Spain.</h4>
      <div className="intro-grid">
        <div>
          <p>
            I have always been fascinated by the world of science and
            technology. That's why I studied a Bachelor of Engineering -BE,
            Electrical and Electronics Engineering. While I was studying, I
            worked as a hospital administrative assistant, which inspired me to
            pursue a Master of Science – MS, Bioengineering and Biomedical
            Engineering. There I learnt to manage genomic databases, programming
            in R, Matlab and Python. In my thesis I worked with Arduino and
            thanks that I discovered the fascinating world of 3D printing. Later
            I learnt about Robotics, Machine Learning and Artificial
            Intelligence.
          </p>
          <p>
            I worked as a freelance web developer, using HTML, CSS, JS and React
            on the front-end and Node.js on the back-end. Currently I am still
            learning to be Web3 engineer, Blockchain with Solidity. I am really
            excited about the change that is taking place and I would like to be
            able to contribute with the knowledge that I have been acquiring
            during these years, and why not, be part of the change.
          </p>
        </div>
        <div>
          <img className="intro-image" alt="Noemi Campo" src={NoemiImg} />
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
