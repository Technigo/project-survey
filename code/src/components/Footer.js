import React from 'react';

// icon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styling
import 'styles/form.css'

export const Footer = () => {
  return (
    <footer>
      <p>This website was created by Nino Aquilon, Technigo student spring &apos;23.</p>
      <a href="https://www.github.com" className="button icon-button" aria-label="Icon-only Button">
        <FontAwesomeIcon icon="fab fa-github" />
      </a>
    </footer>
  )
}