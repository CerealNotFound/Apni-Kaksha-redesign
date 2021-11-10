import React, { useState } from "react";
import {Video1, Video2, Video3, Video4} from "../videos/HtmlVideos.js"

const HtmlLecture1 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">HTML Course | From Beginners to Advance Level | Lecture 1</p>
      </div>
      <p>37min</p>
      {isOpen && <Video1 />}
    </div>
  )
}

const HtmlLecture2 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">HTML Course | World's most premium HTML Course | Lecture 2</p>
      </div>
      <p>32min</p>
      {isOpen && <Video2 />}
    </div>
  )
}

const HtmlLecture3 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">HTML Course | Media Elements | Lecture 3</p>
      </div>
      <p>26min</p>
      {isOpen && <Video3 />}
    </div>
  )
}

const HtmlLecture4 = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="video-wrapper" onClick={() => {setIsOpen(!isOpen)}}>
      <div className="title-video-wrapper">
        <span className="video-icon"></span>
        <p className="video-name">HTML | Structuring a Mega Project</p>
      </div>
      <p>32min</p>
      {isOpen && <Video4 />}
    </div>
  )
}

export {HtmlLecture1, HtmlLecture2, HtmlLecture3, HtmlLecture4}