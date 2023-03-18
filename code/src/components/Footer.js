import React from 'react';
import '../footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-footer">
          <p>Michelle Wegler</p>
        </div>
        <div className="logo-footer">
          <p>Music by: Bensound.com/royalty-free-music</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/michellewegler/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-hidden="true" />
            <span className="sr-only">Linkedin</span>
          </a>
          <a href="https://github.com/smirrebinx" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-hidden="true" />
            <span className="sr-only">Github</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
