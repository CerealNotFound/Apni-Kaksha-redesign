import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [isActive, setActive] = useState("false");

  return (
    <div id="nav-wrapper">
      <nav>
        <a href={"this"} id="logo">Apni Kaksha</a>
          <div className={isActive ? "nav-links" : "menu"}>
            <a href={"this"}>Let's Study<span className="down-arrow"></span></a>
            <a href={"this"}>Student<span className="down-arrow"></span></a>
            <a href={"this"}>Our Channels</a>
          </div>
          <a href={"this"} className={isActive ? "login" : "login-active"}>Login</a>
        <div className={isActive ? "hamburger" : "hamburger active"} onClick={() => { setActive(!isActive) }} />
      </nav>
    </div>
  );
};

export default Navbar; 