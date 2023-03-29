import React from 'react';

const Footer = () => {
  return (
    <div aria-hidden="true" className="contact">
      <p>CREATED BY FANNY STENBERG<br />STUDENT @ TECHNIGO 2023</p>
      <button
        type="button"
        className="contactMe"
        onClick={() => window.open('https://fannystenberg.netlify.app/')}>
          Contact
      </button>
    </div>
  )
};

export default Footer;