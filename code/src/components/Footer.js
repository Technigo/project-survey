import React from 'react';
import footerLogo from 'assets/noun-music-1620687.png';

// styling
import 'styles/footer.css'

export const Footer = () => {
  return (
    <footer>
      <img src={footerLogo} alt="logo" className="footer-logo" />
      <p>This website was created by Nino Aquilon, Technigo student spring &apos;23.</p>
      <p>Music icons by Muhammad Ahsanu Nadia and Gem Designs from <a href="https://thenounproject.com/browse/icons/term/music/" target="_blank" title="Music Icons" rel="noreferrer">Noun Project</a> (CC BY 3.0)</p>
    </footer>
  )
}