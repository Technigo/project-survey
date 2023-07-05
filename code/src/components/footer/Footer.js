import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <a href="https://www.linkedin.com/in/sarabattilotti/"><img src="./assets/linkedinlogo.png" className="contact-logo" alt="link to LinkedIn" /></a>
        <a href="https://cerulean-madeleine-a3d3da.netlify.app/"><img src="./assets/sarabattilotti.jpeg" className="contact-logo" alt="link to Sara's portfolio" /></a>
        <a href="https://github.com/SaraBat"><img src="./assets/githublogo.png" className="contact-logo" alt="link to GitHub" /></a>
      </div>
      <div className="about-me">
        <p>Designed by Sara Battilotti</p>
      </div>
    </footer>
  )
}