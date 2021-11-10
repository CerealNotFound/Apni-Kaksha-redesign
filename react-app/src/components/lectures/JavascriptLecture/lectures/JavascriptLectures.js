import React, { useState } from "react";
import {Video1, Video2, Video3, Video4, Video5, Video6, Video7, Video8, Video9, Video10, Video11, Video12} from "../videos/JavascriptVideos.js"

const JavascriptLecture1 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Javascript Introduction | Lecture 1 | Web Development Course</p>
      </div>
      <p>7min</p>
      {isOpen && <Video1 />}
    </div>
  )
}

const JavascriptLecture2 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Javascript - First Program Namaste World | Lecture 2 | Web Development Course</p>
      </div>
      <p>16min</p>
      {isOpen && <Video2 />}
    </div>
  )
}

const JavascriptLecture3 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">How JavaScript Works ? | Javascript - Lecture 3 | Web Development Course</p>
      </div>
      <p>5min</p>
      {isOpen && <Video3 />}
    </div>
  )
}

const JavascriptLecture4 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">What is DOM (Document Object Model) ? | Javascript Lecture 4</p>
      </div>
      <p>6min</p>
      {isOpen && <Video4 />}
    </div>
  )
}

const JavascriptLecture5 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Ways to add Java Script to Web Pages? Java Script : Lecture 5 @Apna College</p>
      </div>
      <p>4min</p>
      {isOpen && <Video5 />}
    </div>
  )
}

const JavascriptLecture6 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Javascript | Lecture 6,7 & 8 Combined | Web Development Course</p>
      </div>
      <p>38min</p>
      {isOpen && <Video6 />}
    </div>
  )
}

const JavascriptLecture7 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Javascript | Lecture 9 & 10 combined | If else and switch statements | Web Development Course</p>
      </div>
      <p>14min</p>
      {isOpen && <Video7 />}
    </div>
  )
}

const JavascriptLecture8 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Loops in Javascript | Web Development Course | Javascript- Lecture 11</p>
      </div>
      <p>21min</p>
      {isOpen && <Video8 />}
    </div>
  )
}

const JavascriptLecture9 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Basics of Functions in Javascript | Web Development Course | Javascript - Lecture 12</p>
      </div>
      <p>12min</p>
      {isOpen && <Video9 />}
    </div>
  )
}

const JavascriptLecture10 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Strings in Javascript | Web Development Course | Lecture 13 & 14</p>
      </div>
      <p>25min</p>
      {isOpen && <Video10 />}
    </div>
  )
}

const JavascriptLecture11 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Javascript : Top 10 Websites to practice | Web Development Course | Lecture 18</p>
      </div>
      <p>8min</p>
      {isOpen && <Video11 />}
    </div>
  )
}

const JavascriptLecture12 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">Reference Datatypes in JavaScript | Web Development Course | Javascript Lecture 17</p>
      </div>
      <p>16min</p>
      {isOpen && <Video12 />}
    </div>
  )
}

export {JavascriptLecture1, JavascriptLecture2, JavascriptLecture3, JavascriptLecture4, JavascriptLecture5, JavascriptLecture6, JavascriptLecture7, JavascriptLecture8, JavascriptLecture9, JavascriptLecture10, JavascriptLecture11, JavascriptLecture12}