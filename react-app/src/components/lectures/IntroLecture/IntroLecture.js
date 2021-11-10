import React, { useState } from 'react';
import "./IntroLecture.css";
import IntroVideo from "./videos/IntroVideo.js"

const IntroLecture = () => {

  const [isActive, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return(
    <li class="lecture-li">
      <div onClick={() => {setActive(!isActive)}} className={"li-title-wrapper"} >
        <div className="lecture-title-down-wrapper">
          <span className={isActive ? "caret-up active" : "caret-up"}></span>
          <p className="lecture-title">Introduction</p>
        </div>
        <p className="lecture-time">1 lectures • 11min 8s</p>
      </div>
      <div className={isActive ? "intro-wrapper" : "null"}>
        <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
        <div className="title-video-wrapper">
          <span className="video-icon"></span>
          <p className="video-name">Introduction to Web Development | World's most premium Web Development Course | Lecture 0 (Reupload)</p>
        </div>
        <p>11min</p>
        {isOpen && <IntroVideo />}
      </div>
    </div>
    </li>
  )
}

export default IntroLecture;