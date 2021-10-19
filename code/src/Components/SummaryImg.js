import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="summaryImg"
          src="https://giphy.com/embed/1qYIkLHipXBPK8xN9s"
          width="240"
          height="135"
          allowFullScreen
        ></iframe>
        <p className="giphyText">
          <a
            className="imgLink"
            href="https://giphy.com/gifs/rupaulsdragrace-episode-11-rupauls-drag-race-1qYIkLHipXBPK8xN9s"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
