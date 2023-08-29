import React from 'react';
import footerLogo from 'assets/noun-music-1620687.png';

export const Footer = () => {
  return (
    <footer>
      <img src={footerLogo} alt="logo" className="footer-logo" />
      <p>Music icons by Muhammad Ahsanu Nadia and Gem Designs from <a href="https://thenounproject.com/browse/icons/term/music/" target="_blank" title="Music Icons" rel="noreferrer">Noun Project</a> (CC BY 3.0)</p>
    </footer>
  )
}