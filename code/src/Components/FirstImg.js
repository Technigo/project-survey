import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="firstImg"
          src="https://giphy.com/embed/EY4ID9rvRbgGY"
          width="240"
          height="135"
          allowFullScreen
        ></iframe>
        <p className="giphyText">
          <a
            className="imgLink"
            href="https://giphy.com/gifs/violet-EY4ID9rvRbgGY"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
