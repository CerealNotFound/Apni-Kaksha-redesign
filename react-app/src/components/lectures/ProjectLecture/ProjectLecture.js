import React, { useState } from "react";
import {ProjectLecture1, ProjectLecture2} from "./lectures/ProjectLectures";

const ProjectLecture = () => {

  const [isActive, setActive] = useState(false);

  return(
    <li className={"lecture-li"}>
      <div onClick={() => {setActive(!isActive)}} className={"li-title-wrapper"} >
        <div className="lecture-title-down-wrapper">
          <span className={isActive ? "caret-up active" : "caret-up"}></span>
          <p className="lecture-title">Project (Apni Kaksha Landing Page)</p>
        </div>
        <p className="lecture-time">2 lectures • 1hr 8min 10s</p>
      </div>
      <div className={isActive ? "intro-wrapper" : "null"}>
        <ProjectLecture1 />
        <ProjectLecture2 />
      </div>
    </li>
  )
}

export default ProjectLecture;