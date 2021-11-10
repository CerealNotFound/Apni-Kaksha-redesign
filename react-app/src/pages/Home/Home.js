import React from "react";
import "./Home.css";
import LandingPage from "../../components/LandingPage/LandingPage.js";
import CoursePage from "../../components/CoursePage/CoursePage.js";
import LastPage from "../../components/LastPage/LastPage.js";


const Home = () => {
  return(
    <div id="home-wrapper">
      <LandingPage />
      <div id="main-wrapper">
        <CoursePage />
        <LastPage />
      </div>
    </div>
  )
}

export default Home;