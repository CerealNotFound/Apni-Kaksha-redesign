import React from "react";
import DummyScreen from "../../assets/DummyScreen.png";

import "./LastPage.css";

const LastPage = () => {
  return(
    <section id="last-page-wrapper">
      <div id="last-page-main">
        <div id="last-text">
          <h1>Download the Apni Kaksha app from Playstore.</h1>
          <p>Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more taught by top faculties!</p>
        </div>
        <div>
          <img id="last-img" alt="DummyScreen" src={DummyScreen}/>
        </div>
      </div>
    </section>
  )
}

export default LastPage;






























