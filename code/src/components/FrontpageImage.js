import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div className="imageContainer">
        <iframe
          title="frontpageImage"
          src="https://giphy.com/embed/ShTlThiE6E6Iw"
          width="250"
          height="250"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default ImageComponent;
