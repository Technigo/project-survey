import React from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// styling
import 'styles/footer.css'

export const Footer = () => {
  return (
    <footer role="contentinfo">
      <p>A website by Nino Aquilon, created @Technigo &apos;23.</p>
      <section className="contact">
        <a href="https://www.github.com" className="button icon-button">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.github.com" className="button icon-button">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
    </footer>
  )
}