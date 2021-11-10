import React, { useState } from "react";
import {Video1, Video2, Video3, Video4} from "../videos/BootstrapVideos.js"

const BootstrapLecture1 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Namaste World in Bootstrap | Web Development Course</p>
      </div>
      <p>15min</p>
      {isOpen && <Video1 />}
    </div>
  )
}

const BootstrapLecture2 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Customization & Layout in Bootstrap | Web Development Course | Lecture 15</p>
      </div>
      <p>11min</p>
      {isOpen && <Video2 />}
    </div>
  )
}

const BootstrapLecture3 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Bootstrap - Grid Layout | Web Development Course | Lecture 16</p>
      </div>
      <p>17min</p>
      {isOpen && <Video3 />}
    </div>
  )
}

const BootstrapLecture4 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Bootstrap - Components | Web Development Course | Lecture 17</p>
      </div>
      <p>10min</p>
      {isOpen && <Video4 />}
    </div>
  )
}

export {BootstrapLecture1, BootstrapLecture2, BootstrapLecture3, BootstrapLecture4}