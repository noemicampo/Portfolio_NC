import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import linkedinImage from "../../images/linkedin-in.svg";
import githubImage from "../../images/github.svg";
import Logo from '../../images/logo_bn.png';


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img src={Logo} alt="Noemi Campo" className="logo"/>
          <h5>Noemi Campo</h5> 
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                contact
              </NavLink>
            </li>
            <li className="nav_social">
            <a
              href="https://www.linkedin.com/in/noemi-campo-4a7381240/"
              target="_blank"
              rel="noreferrer"
              title="Connect with me on Linkedin"
              className="nav-links"
              activeClassName="active"
            >
              <img src={linkedinImage} alt="Connect with me on Linkedin" />
            </a>
          </li>
          <li className="nav_social">
            <a
              href="https://github.com/noemicampo"
              target="_blank"
              rel="noreferrer"
              title="Connect with me on Github"
              className="nav-links"
            >
              <img src={githubImage} alt="Connect with me on GitHub" />
            </a>
          </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;