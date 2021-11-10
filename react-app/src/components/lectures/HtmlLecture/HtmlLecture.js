import React, { useState } from 'react';
import {HtmlLecture1, HtmlLecture2, HtmlLecture3, HtmlLecture4} from "./lectures/HtmlLectures"



const HtmlLecture = () => {

  const [isActive, setActive] = useState(false); 

  return(
    <li class="lecture-li">
      <div onClick={() => {setActive(!isActive)}} className={"li-title-wrapper"} >
        <div className="lecture-title-down-wrapper">
          <span className={isActive ? "caret-up active" : "caret-up"}></span>
          <p className="lecture-title">HTML (Hypertext Markup Language)</p>
        </div>
        <p className="lecture-time">4 lectures • 2hr 9min 1s</p>
      </div>
      <div className={isActive ? "intro-wrapper" : "null"}>
        <HtmlLecture1 />
        <HtmlLecture2 />
        <HtmlLecture3 />        
        <HtmlLecture4 />
      </div>
    </li>
  )
}

export default HtmlLecture;