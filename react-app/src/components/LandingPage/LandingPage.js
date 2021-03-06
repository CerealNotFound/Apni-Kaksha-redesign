import React from "react";
import Navbar from "../Navbar/Navbar.js";
import "./LandingPage.css";
import CoderPng from "../../assets/Saly-38.png";
import Quirks from "../Quirks/Quirks.js";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section id="landing-page-wrapper">
          <div id="landing-page-flex-wrapper">
            <ul id="landing-page-ul">
              <li><h1>The Web Developement Course</h1></li>
              <li className="sub-heading"><p>Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more taught by top faculties!</p></li>
              <li id="views-wrapper"><span id="graph"></span><p id="views">5,013,675 Views</p></li>
              <li><a id="share-parent" href="#"><span id="send"></span><p id="share">Share</p></a></li>
              <Quirks />
            </ul>
            <img alt="boy-coding" className="images-png" src={CoderPng}/>
          </div>
      </section>
    </div>
  )
}

export default LandingPage;