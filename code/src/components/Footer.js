import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <p>All recipes and images are from <a href="https://houseofnasheats.com/" target="_blank" rel="noopener noreferrer">House of Nash Eats</a></p>
      <p>Icons are by Freepik at <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a></p>
      <div className="contact-me">
        <a href="https://www.linkedin.com/in/bridget-mailley/"><img src="./assets/linkedinlogo.png" className="contact-logo" alt="link to LinkedIn" /></a>
        <a href="https://bridgetmailley.com/"><img src="./assets/bridgetmailley.jpg" className="contact-logo" alt="link to Bridget's portfolio" /></a>
        <a href="https://github.com/beemailley"><img src="./assets/githublogo.png" className="contact-logo" alt="link to GitHub" /></a>
      </div>
      <div className="about-me">
        <p>Designed by Bridget Mailley. Technigo Web Development Bootcamp 2023.</p>
      </div>
    </footer>
  )
}

