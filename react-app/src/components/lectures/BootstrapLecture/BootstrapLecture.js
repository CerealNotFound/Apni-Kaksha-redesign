import React, { useState } from "react";
import {BootstrapLecture1, BootstrapLecture2, BootstrapLecture3, BootstrapLecture4} from "./lectures/BootstrapLectures.js";

const BootstrapLecture = () => {

  const [isActive, setActive] = useState(false);

  return(
    <li className={"lecture-li"}>
      <div onClick={() => {setActive(!isActive)}} className={"li-title-wrapper"} >
        <div className="lecture-title-down-wrapper">
          <span className={isActive ? "caret-up active" : "caret-up"}></span>
          <p className="lecture-title">Bootstrap</p>
        </div>
        <p className="lecture-time">4 lectures • 54min 56s</p>
      </div>
      <div className={isActive ? "intro-wrapper" : "null"}>
        <BootstrapLecture1 />
        <BootstrapLecture2 />
        <BootstrapLecture3 />
        <BootstrapLecture4 />
      </div>
    </li>
  )
}

export default BootstrapLecture;