import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./NavBar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClubMenuOpen, setClubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleClubMenu = () => {
    setClubMenuOpen(!isClubMenuOpen);
  };

  //Images
//   const alankarLogo =
//     "https://drive.google.com/uc?export=view&id=1tF7lLYbLWT3BIKIoUuUr6hh6hb4TgCWK";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span
            className={`navbar-toggler-icon ${isMenuOpen ? "open" : ""}`}
          ></span>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="/" className="navbar-link">
            Home
          </a>
          <div className="navbar-link" onClick={toggleClubMenu}>
            Clubs
            {isClubMenuOpen && (
              <div className="navbar-club-menu">
                <a href="/club/alankar" className="navbar-club-link">
                  {/* <img src={alankarLogo} alt="Alankar Club" /> */}
                  <span>Alankar Club</span>
                </a>
                <a href="/club/epicure" className="navbar-club-link">
                  {/* <img src={epicureLogo} alt="Epicure Club" /> */}
                  <span>Epicure Club</span>
                </a>
                <a href="/club/fine-arts" className="navbar-club-link">
                  {/* <img src={fineArtsLogo} alt="FineArts Club" /> */}
                  <span>FineArts Club</span>
                </a>
                <a href="/club/undekha" className="navbar-club-link">
                  {/* <img src={undekhaLogo} alt="Undekha Club" /> */}
                  <span>Undekha Club</span>
                </a>
                <a href="/club/arturo" className="navbar-club-link">
                  {/* <img src={arturoLogo} alt="Arturo Club" /> */}
                  <span>Arturo Club</span>
                </a>
                <a href="/club/dance" className="navbar-club-link">
                  {/* <img src={danceLogo} alt="Dance Club" /> */}
                  <span>Dance Club</span>
                </a>
              </div>
            )}
          </div>
          <a href="/" className="navbar-link">
            Gallery
          </a>
          <a href="/contact" className="navbar-link">
            Contact Us
          </a>
        </div>
      </div>
      <div className="navbar-icons">
        <a href="https://www.instagram.com/yaaimgopalbansal/"><InstagramIcon className="navbar-icon"  /></a>
        <FacebookIcon className="navbar-icon" />
        <a href="https://www.linkedin.com/in/mathnebula186f"><LinkedInIcon className="navbar-icon" /></a>
        <a href="https://www.instagram.com/yaaimgopalbansal/"><GitHubIcon className="navbar-icon"  /></a>
      </div>
    </nav>
  );
};

export default Navbar;
