import React, { useState } from "react";

import {JavascriptLecture1, JavascriptLecture2, JavascriptLecture3, JavascriptLecture4, JavascriptLecture5, JavascriptLecture6, JavascriptLecture7, JavascriptLecture8, JavascriptLecture9, JavascriptLecture10, JavascriptLecture11, JavascriptLecture12} from "./lectures/JavascriptLectures.js"

const JavascriptLecture = () => {

  const [isActive, setActive] = useState(false);

  return(
    <li className={"lecture-li"}>
      <div onClick={() => {setActive(!isActive)}} className={"li-title-wrapper"} >
        <div className="lecture-title-down-wrapper">
          <span className={isActive ? "caret-up active" : "caret-up"}></span>
          <p className="lecture-title">Javascript</p>
        </div>
        <p className="lecture-time">6 lectures • 1hr 19min 8s</p>
      </div>
      <div className={isActive ? "intro-wrapper" : "null"}>
        <JavascriptLecture1 />
        <JavascriptLecture2 />
        <JavascriptLecture3 />
        <JavascriptLecture4 />
        <JavascriptLecture5 />
        <JavascriptLecture6 />
        <JavascriptLecture7 />
        <JavascriptLecture8 />
        <JavascriptLecture9 />
        <JavascriptLecture10 />
        <JavascriptLecture11 />
        <JavascriptLecture12 />
      </div>
    </li>
  )
}

export default JavascriptLecture;