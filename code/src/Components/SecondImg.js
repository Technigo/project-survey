import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="secondImg"
          src="https://giphy.com/embed/3X7qCQJH09cEwYhKAZ"
          width="240"
          height="135"
          allowFullScreen
        ></iframe>
        <p className="giphyText">
          <a
            className="imgLink"
            href="https://giphy.com/gifs/bbcthree-3X7qCQJH09cEwYhKAZ"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
