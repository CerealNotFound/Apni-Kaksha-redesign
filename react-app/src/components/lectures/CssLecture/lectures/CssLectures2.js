import React,{ useState } from "react";

import {Video11, Video12, Video13, Video14, Video15, Video16, Video17, Video18, Video19, Video20} from "../videos/Videos.js";

const Lecture11 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Challenge 3: Float | Web Development Course</p>
      </div>
      <p>3min</p>
      {isOpen && <Video11 />}
    </div>
  )
}

const Lecture12 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Challenge #4 : Positions | Web Development Course</p>
      </div>
      <p>3min</p>
      {isOpen && <Video12 />}
    </div>
  )
}

const Lecture13 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Learn Flexbox Under 25mins | Web Development Course</p>
      </div>
      <p>24min</p>
      {isOpen && <Video13 />}
    </div>
  )
}

const Lecture14 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Flexbox-1 Challenge | CSS | Web Development Course</p>
      </div>
      <p>2min</p>
      {isOpen && <Video14 />}
    </div>
  )
}

const Lecture15 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
     <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Flexbox-2 Challenge | CSS | Web Development Course</p>
      </div>
      <p>2min</p>
      {isOpen && <Video15 />}
    </div>
  )
}

const Lecture16 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Flexbox-3 Challenge | CSS | Web Development Course</p>
      </div>
      <p>2min</p>
      {isOpen && <Video16 />}
    </div>
  )
}

const Lecture17 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">CSS Grid | Web Development Course</p>
      </div>
      <p>18min</p>
      {isOpen && <Video17 />}
    </div>
  )
}

const Lecture18 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">CSS Grid-1 Challenge #8 | Web Development Course</p>
      </div>
      <p>2min</p>
      {isOpen && <Video18 />}
    </div>
  )
}

const Lecture19 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">CSS Grid -2 Challenge - 9 | Web Development Course</p>
      </div>
      <p>2min</p>
      {isOpen && <Video19 />}
    </div>
  )
}

const Lecture20 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Learn Animations in CSS</p>
      </div>
      <p>12min</p>
      {isOpen && <Video20 />}
    </div>
  )
}

export {Lecture11, Lecture12, Lecture13, Lecture14, Lecture15, Lecture16, Lecture17, Lecture18, Lecture19, Lecture20}