import React from "react";
import ReactDOM from "react-dom";

export default function IntroVideo() {
  return ReactDOM.createPortal(
    <div className="modal-iframe">
      <div className="cross-modal"></div>
      <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/l1EssrLxt7E?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>, document.getElementById("portal")
    )
}