import React from 'react';

import 'styles/footer.css';

export const Footer = () => {
  
  return (
    <footer>
      <p tabIndex="0">This is a project created by Gabriella Bolin during Technigo's Bootcamp 20/21.</p>
      <p tabIndex="0">The answers will not be sent to me. </p>
      <p tabIndex="0">If you want to contact me please reach me on 
        <span className="email-underlined">gabriellabolin@gmail.com </span> 
      or 
      <a href="https://www.linkedin.com/in/gabriella-bolin-b718544a/" 
            aria-label="Link to LinkedIn"
            target="_blank" 
            rel="noopener noreferrer">
             @LinkedIn.
          </a>
      </p>
    </footer>
  );
};