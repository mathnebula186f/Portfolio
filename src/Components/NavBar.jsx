import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SiGeeksforgeeks } from "react-icons/si";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [isResearchMenuOpen, setResearchMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProjectsMenu = () => {
    setProjectsMenuOpen(!isProjectsMenuOpen);
  };

  const toggleResearchMenu = () => {
    setResearchMenuOpen(!isResearchMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span
            className={`navbar-toggler-icon ${isMenuOpen ? "open" : ""}`}
          ></span>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <div className="navbar-link hidden" onClick={toggleProjectsMenu}>
            Projects
            {isProjectsMenuOpen && (
              <div className="navbar-projects-menu">
                <Link to="/projects/proximity" className="navbar-project-link">
                  {/* <img src={alankarLogo} alt="Alankar Club" /> */}
                  <span>Proximity</span>
                </Link>
                <Link
                  to="/projects/task-managment"
                  className="navbar-project-link"
                >
                  {/* <img src={epicureLogo} alt="Epicure Club" /> */}
                  <span>Task Managment</span>
                </Link>
              </div>
            )}
          </div>
          <div
            className="navbar-link cursor-pointer"
            onClick={toggleResearchMenu}
          >
            Research
            {isResearchMenuOpen && (
              <div className="navbar-projects-menu">
                <Link to="/research/charvis" className="navbar-project-link">
                  {/* <img src={alankarLogo} alt="Alankar Club" /> */}
                  <span>CharVis</span>
                </Link>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to="#" className="navbar-project-link">
                  {/* <img src={epicureLogo} alt="Epicure Club" /> */}
                  <span>Coming Soon ..</span>
                </Link>
              </div>
            )}
          </div>
          <Link
            to="https://drive.google.com/file/d/15S3JxlfMF_94X1Me7jFWPWa-LHDu1yv7/view?usp=sharing"
            className="navbar-link"
          >
            Resume
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="navbar-icons">
        <Link to="https://www.instagram.com/yaaimgopalbansal/">
          <InstagramIcon className="navbar-icon" />
        </Link>
        <FacebookIcon className="navbar-icon" />
        <Link to="https://www.linkedin.com/in/mathnebula186f">
          <LinkedInIcon className="navbar-icon" />
        </Link>
        <Link to="https://github.com/mathnebula186f">
          <GitHubIcon className="navbar-icon" />
        </Link>
        <Link to="https://www.geeksforgeeks.org/user/mathnebula186f/">
          <SiGeeksforgeeks className="navbar-icons" color="white" size={22} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
