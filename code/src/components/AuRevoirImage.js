import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="auRevoirImage"
          src="https://giphy.com/embed/xT0GqCd3OEQdXNdIME"
          width="480"
          height="219"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default ImageComponent;
