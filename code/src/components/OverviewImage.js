import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <iframe
            title="overviewImage"
            src="https://giphy.com/embed/dsKnRuALlWsZG"
            width="480"
            height="271"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default ImageComponent;
