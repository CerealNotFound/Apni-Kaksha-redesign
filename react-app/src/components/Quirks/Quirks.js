import React from "react";
import "./Quirks.css"

const Quirks = () => {
  return(
    <div>
      <ul id="quirks-wrapper">
        <li className="quirk">
          <div id="video-icon"></div>
          <p id="video-quirk">10+ hours on demand video</p>
        </li>
        <li className="quirk">
          <div id="infinity-icon"></div>
          <p id="time-quirk">Lifetime access</p>
        </li>
        <li className="quirk">
          <div id="mobile-icon"></div>
          <p id="access-quirk">Full access on mobile and TV</p>
        </li>
      </ul>

      <ul id="iframe-quirks-wrapper">
        <li id="iframe-li"><iframe id="iframe-quirk" src="https://www.youtube-nocookie.com/embed/l1EssrLxt7E" title="Introduction to web development" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></li>
        <li className="iframe-sibling-quirk"><h2>This course includes: </h2></li>
        <li className="iframe-sibling-quirk">
          <div id="video-icon"></div><p id="video-quirk">10+ hours on demand video</p></li>
        <li className="iframe-sibling-quirk"><div id="infinity-icon"></div><p id="time-quirk">Lifetime access</p></li>
        <li className="iframe-sibling-quirk"><div id="mobile-icon"></div><p id="access-quirk">Full access on mobile and TV</p></li>
      </ul>
    </div>
  )
}

export default Quirks;