import React, { useState } from "react";

import {Video1, Video2, Video3, Video4, Video5, Video6, Video7, Video8, Video9, Video10} from "../videos/Videos.js";


const Lecture1 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">CSS - What is selectors? | Web Development Course</p>
      </div>
      <p>25min</p>
      {isOpen && <Video1 />}
    </div>
  )
}

const Lecture2 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Properties in CSS | Web Development Course | CSS Lecture 2</p>
      </div>
      <p>32min</p>
      {isOpen && <Video2 />}
    </div>
  )
}

const Lecture3 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Understanding Box Model | Styling List and Tables | CSS Lecture 3</p>
      </div>
      <p>28min</p>
      {isOpen && <Video3 />}
    </div>
  )
}

const Lecture4 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Understanding Cascading , Specificity and Inheritance | CSS Lecture 4</p>
      </div>
      <p>25min</p>
      {isOpen && <Video4 />}
    </div>
  )
}

const Lecture5 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Styling Forms in CSS | Web Development Course | Lecture 5 of CSS</p>
      </div>
      <p>15min</p>
      {isOpen && <Video5 />}
    </div>
  )
}

const Lecture6 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Challenge #1 for Web Development Course students | Forms</p>
      </div>
      <p>1min</p>
      {isOpen && <Video6 />}
    </div>
  )
}

const Lecture7 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Debugging in CSS | Web Development Course</p>
      </div>
      <p>15min</p>
      {isOpen && <Video7 />}
    </div>
  )
}

const Lecture8 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">What is Responsiveness? CSS | Web Development Course | Lecture 7</p>
      </div>
      <p>14min</p>
      {isOpen && <Video8 />}
    </div>
  )
}

const Lecture9 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Responsiveness Challenge | CSS | Web Development Course</p>
      </div>
      <p>3min</p>
      {isOpen && <Video9 />}
    </div>
  )
}

const Lecture10 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Floats & Position Properties | CSS | Web Development Course</p>
      </div>
      <p>22min</p>
      {isOpen && <Video10 />}
    </div>
  )
}

export {Lecture1, Lecture2, Lecture3, Lecture4, Lecture5, Lecture6, Lecture7, Lecture8, Lecture9, Lecture10}