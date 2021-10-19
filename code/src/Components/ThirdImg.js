import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="thirdImg"
          src="https://giphy.com/embed/8h9Y0uq2YPlZOOils1"
          width="240"
          height="135"
          allowFullScreen
        ></iframe>
        <p className="giphyText">
          <a
            className="imgLink"
            href="https://giphy.com/gifs/rupaulsdragrace-season-13-drag-race-rpdr-8h9Y0uq2YPlZOOils1"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
