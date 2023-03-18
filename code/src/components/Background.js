/* eslint-disable max-len */
import React from 'react';
import Sky from '../assets/sky2.mp4';

const Background = () => {
  return (
    <div className="video-container">
      <video src={Sky} autoPlay loop muted id="myVideo" />
    </div>
  )
}

export default Background;