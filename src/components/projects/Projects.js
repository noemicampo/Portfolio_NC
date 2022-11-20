import React from "react";

import "./Projects.css";
import JustSushi from "../../images/projects/justsushi.png";
import Weather from "../../images/projects/weather.png";
import githubImage from "../../images/github.svg";
import Lyrics from "../../images/projects/lyrics.jpg";

const Projects = () => {
  return (
    <div className="project-grid">
      <div className="wrap">
        <div className="project-info">
          <a
            href={"https://lyrics-ncdev.netlify.app/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Lyrics} alt="Lyrics" className="project-img" />
            <h4>Lyrics App</h4>
            <p>
              Music player, search, lyrics, song exploration features, popular
              music around you, worldwide top charts, and much more.
            </p>
            <p>REACT, REDUX, RAPIDAPI, TAILWIND</p>
          </a>
        </div>
        <div className="project-github">
          <a
            href={"https://github.com/noemicampo/Lyrics"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubImage}
              alt="Connect with me on GitHub"
              className="github-img"
            />
            <h5>SOURCE CODE</h5>
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="project-info">
          <a
            href={"https://justsushi-ncdev.netlify.app/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={JustSushi} alt="JustSushi" className="project-img" />
            <h4>JustSushi App</h4>
            <p>
              Do you like sushi? Let's order some delicious sushi! This project
              is made with React, using Context, Router, Redux and custom hooks.
              The forms and user inputs are designed to improve the user's
              experience. The backend is using Firebase.{" "}
            </p>
            <p>REACT, ROUTER, REDUX, FIREBASE</p>
          </a>
        </div>
        <div className="project-github">
          <a
            href={"https://github.com/noemicampo/JustSushi"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubImage}
              alt="Connect with me on GitHub"
              className="github-img"
            />
            <h5>SOURCE CODE</h5>
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="project-info">
          <a
            href={"https://weather-ncdev.netlify.app/"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Weather} alt="WeatherApp" className="project-img" />
            <h4>Weather App</h4>
            <p>
              Progressive Web App using React. You can check the weather in any
              city of the world.
            </p>
            <p>REACT, JAVASCRIPT</p>
          </a>
        </div>
        <div className="project-github">
          <a
            href={"https://github.com/noemicampo/WeatherApp"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubImage}
              alt="Connect with me on GitHub"
              className="github-img"
            />
            <h5>SOURCE CODE</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
