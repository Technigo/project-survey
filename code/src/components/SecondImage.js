import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="secondImage"
          src="https://giphy.com/embed/gFhGnukUTpMxqFMZho"
          width="480"
          height="258"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default ImageComponent;
