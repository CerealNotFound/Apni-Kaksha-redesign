import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [isActive, setActive] = useState("false");

  return (
    <nav>
      <div id="links-wrapper">
        <a href={"#"} id="logo">Apni Kaksha</a>
        <div className={isActive ? "nav-links" : "menu"}>
          <div className="dropdown-toggle">
            <span>Let's Study</span>
            <span className="down-arrow"></span>
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li className="dropdown-li"><a href={"#"}>Dummy Link</a></li>
                <li className="dropdown-li"><a href={"#"}>Dummy Link</a></li>
                <li className="dropdown-li"><a href={"#"}>Dummy Link</a></li>
              </ul>
            </div>
          </div>
          <div className="dropdown-toggle">
            <span>Student</span>
            <span className="down-arrow"></span>
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li className="dropdown-li"><a href={"#"}>Dummy Link</a></li>
              </ul>
            </div>
          </div>
          <a href={"#"}>Our Channels</a>
        </div>
        <a href={"#"} className={isActive ? "login" : "login-active"}>Login</a>
        <div className={isActive ? "hamburger" : "hamburger-active"} onClick={() => { setActive(!isActive) }}/>
      </div>
    </nav>
  );
};

export default Navbar; 