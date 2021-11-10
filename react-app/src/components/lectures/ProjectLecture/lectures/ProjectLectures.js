import React, { useState } from "react";
import {Video1, Video2} from "../videos/ProjectVideos.js"

const ProjectLecture1 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Adding CSS to Mega Project</p>
      </div>
      <p>14min</p>
      {isOpen && <Video1 />}
    </div>
  )
}

const ProjectLecture2 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Updating Design of Mega Project | Web Development Course</p>
      </div>
      <p>53min</p>
      {isOpen && <Video2 />}
    </div>
  )
}

export {ProjectLecture1, ProjectLecture2}