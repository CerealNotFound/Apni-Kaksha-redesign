import React from "react";
import ReactDOM from "react-dom";

const Video1 = () => {
  return ReactDOM.createPortal(
    <div className="modal-iframe-wrapper">
      <div className="cross-modal"></div>
      <iframe className="modal-iframe" width="640" height="360" src="https://www.youtube-nocookie.com/embed/IZa8pbR8CWs?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>, document.getElementById("portal")
    )
}

const Video2 = () => {
  return ReactDOM.createPortal(
    <div className="modal-iframe-wrapper">
      <div className="cross-modal"></div>
      <iframe className="modal-iframe" width="640" height="360" src="https://www.youtube-nocookie.com/embed/ywK_wgQwKJY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>, document.getElementById("portal")
  )
}

export {Video1, Video2}