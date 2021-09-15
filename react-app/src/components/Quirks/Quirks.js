import React from "react";
import "./Quirks.css"

const Quirks = () => {
  return(
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
  )
}

export default Quirks;