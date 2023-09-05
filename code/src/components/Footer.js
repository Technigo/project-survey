import React from 'react';

// styling
import 'styles/footer.css'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer role="contentinfo">
      <p>A website created by Nino Aquilon @Technigo &apos;23.</p>
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