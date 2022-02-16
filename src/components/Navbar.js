import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const renderHamburgerMenu = () => {
    if (isOpen) {
      return (
        <div className="hamburger-menu">
          <ul id="nav-links">
            <li>
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Guestbook
              </a>
            </li>
          </ul>
        </div>
      );
    }
  };

  const renderLogo = () => {
    return (
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
    );
  };

  //renders a button that says donate in the top right corner
  const renderDonateButton = () => {
    return (
      <div className="right-nav">
        <button className="donate-button">Donate</button>
      </div>
    );
  };

  const renderHamburgerIcon = () => {
    return (
      <div className="hamburger-icon">
        <Hamburger
          color="#FDD02A"
          size={40}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    );
  };

  return (
    <div className="navbar">
      {renderHamburgerIcon()}
      {renderHamburgerMenu()}
      {renderLogo()}
      {renderDonateButton()}
    </div>
  );
};

export default Navbar;
