import React from 'react';
import piImg from '../pi.png';
import linuxImg from '../linux.png';

const Footer = () => {
  return (
    <>
      <p className="footer-hide">This is a project made by Linda Malm for educational purposes</p>
      <p><a href="https://github.com/malmen237/project-survey">Check out my code in GitHub</a></p>
      <p><a href="https://www.freepik.com/author/catalyststuff">Images by catalyststuff on Freepik</a></p>
      <p>This page is hosted on a server that was built by me.</p>
      <div className="image-wrapper">
        <img src={piImg} className="pi-img" alt="raspberry pi logo" />
        <img src={linuxImg} className="linux-img" alt="linux penguin logo" />
      </div>
    </>
  );
}

export default Footer;