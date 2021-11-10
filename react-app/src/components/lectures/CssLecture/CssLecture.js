import React, { useState } from 'react';

import {Lecture1, Lecture2, Lecture3, Lecture4, Lecture5, Lecture6, Lecture7, Lecture8, Lecture9, Lecture10} from "./lectures/CssLectures1";
import {Lecture11, Lecture12, Lecture13, Lecture14, Lecture15, Lecture16, Lecture17, Lecture18, Lecture19, Lecture20} from "./lectures/CssLectures2";

const CssLecture = () => {

  const [isActive, setActive] = useState(false);

  return(
    <li class="lecture-li">
      <div onClick={() => {setActive(!isActive)}} className={"li-title-wrapper"} >
        <div className="video-title-icon-wrapper">
          <span className={isActive ? "caret-up active" : "caret-up"}></span>
          <p className="lecture-title">CSS (Cascading Style Sheet)</p>
        </div>
        <p className="lecture-time">20 lectures • 4hr 23min 22s</p>
      </div>
      <div className={isActive ? "intro-wrapper" : "null"}>
        <Lecture1 />
        <Lecture2 />
        <Lecture3 />
        <Lecture4 />
        <Lecture5 />
        <Lecture6 />
        <Lecture7 />
        <Lecture8 />
        <Lecture9 />
        <Lecture10 />
        <Lecture11 />
        <Lecture12 />
        <Lecture13 />
        <Lecture14 />
        <Lecture15 />
        <Lecture16 />
        <Lecture17 />
        <Lecture18 />
        <Lecture19 />
        <Lecture20 />
      </div>
    </li>
  )
}

export default CssLecture;