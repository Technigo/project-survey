import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <iframe
            title="summary-gif"
            src="https://giphy.com/embed/1msy23uqWC5Lr8OFEK"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <p className="giphyText">
          <a
            className="imgLink"
            href="https://giphy.com/gifs/rupaulsdragrace-episode-14-rupauls-drag-race-1msy23uqWC5Lr8OFEK"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
