import React from "react";
// import { skills, Skill } from "./config";
// import { v4 as uuidv4 } from 'uuid';
import "./Skills.css";

import ReactIMG from "../../images/react-logo.png";
import HTML from "../../images/html5-logo.png";
import CSSIMG from "../../images/css-logo.png";
import JS from "../../images/js-logo.png";
import TS from "../../images/ts-logo.png";
// import Solidity from "../../images/solidity-logo.png";
import NPM from "../../images/npm-logo.png";
import Git from "../../images/git-logo.png";
// import Native from "../../images/react-native.png";
// import Web3 from "../../images/web3js.png";
// import Next from "../../images/nextjs-logo.png";
import NodeJS from "../../images/nodej-js.png";


const Skills = () => {
  return(
    <div id="skills">
      {/* <h2 className="title-skills">- SKILLS -</h2> */}
      <div className="toque_color"><h3 className="title-color">SKILLS</h3></div>

      <p className="text-skills">Technologies I use in my development:</p>
      <div className="skill-icons-gird">
        <a href={"https://developer.mozilla.org/en-US/docs/Web/HTML"} target="_blank" rel="noreferrer">
            <div className="skill">
                <img src={HTML} alt="Skill logo" />
            </div>
            <p>{"HTML"}</p>
        </a>
        <a href={"https://developer.mozilla.org/en-US/docs/Web/CSS"} target="_blank" rel="noreferrer">
            <div className="skill">
                <img src={CSSIMG} alt="Skill logo" />
            </div>
            <p>{"CSS"}</p>
        </a>
        <a href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} target="_blank" rel="noreferrer">
            <div className="skill">
            <img src={JS} alt="Skill logo" />
        </div>
            <p>{"JavaScript"}</p>
        </a>
        <a href={"https://www.typescriptlang.org/"} target="_blank" rel="noreferrer">
          <div className="skill">
            <img src={TS} alt="Skill logo" />
          </div>
          <p>{"TypeScript"}</p>
        </a>
        <a href={"https://reactjs.org/"} target="_blank" rel="noreferrer">
            <div className="skill">
              <img src={ReactIMG} alt="Skill logo" />
            </div>
            <p>{"React"}</p>
        </a>
        <a href={"https://nodejs.org/en/"} target="_blank" rel="noreferrer">
            <div className="skill">
              <img src={NodeJS} alt="Skill logo" />
            </div>
            <p>{"NodeJS"}</p>
        </a>
        <a href={"https://git-scm.com/"} target="_blank" rel="noreferrer">
            <div className="skill">
                <img src={Git} alt="Skill logo" />
            </div>
            <p>{"Git"}</p>
        </a>
        <a href={"https://www.npmjs.com/"} target="_blank" rel="noreferrer">
            <div className="skill">
                <img src={NPM} alt="Skill logo" />
            </div>
            <p>{"NPM"}</p>
        </a>
       </div>
    </div>
  )
}

export default Skills;