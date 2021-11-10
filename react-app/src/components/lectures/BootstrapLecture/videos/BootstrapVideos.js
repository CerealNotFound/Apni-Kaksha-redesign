import React from "react";
import ReactDOM from "react-dom";

const Video1 = () => {
  return ReactDOM.createPortal(
    <div className="modal-iframe-wrapper">
      <div className="cross-modal"></div>
      <iframe className="modal-iframe" width="640" height="360" src="https://www.youtube-nocookie.com/embed/DUiYVJIVNcA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>, document.getElementById("portal")
    )
}

const Video2 = () => {
  return ReactDOM.createPortal(
    <div className="modal-iframe-wrapper">
      <div className="cross-modal"></div>
      <iframe className="modal-iframe" width="640" height="360" src="https://www.youtube-nocookie.com/embed/ddWKdSS5TaQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>, document.getElementById("portal")
  )
}

const Video3 = () => {
  return ReactDOM.createPortal(
    <div className="modal-iframe-wrapper">
      <div className="cross-modal"></div>
      <iframe className="modal-iframe" width="640" height="360" src="https://www.youtube-nocookie.com/embed/5NxYn0GiApg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>, document.getElementById("portal")
  )
}

const Video4 = () => {
 return ReactDOM.createPortal(
    <div className="modal-iframe-wrapper">
      <div className="cross-modal"></div>
      <iframe className="modal-iframe" width="640" height="360" src="https://www.youtube-nocookie.com/embed/IwlAhfeSnp8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>, document.getElementById("portal")
  )
}

export {Video1, Video2, Video3, Video4};