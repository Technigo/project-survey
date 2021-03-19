import React from 'react';

import './Header.css'

const Header = () => {
  return (

  <header className="header">
    <h1 className="stockholm-heading" tabIndex="0">
      STOCKHOLM 
    </h1>
    <h1 className="live-music-heading" tabIndex="0">
    LIVE MUSIC
    </h1>
    <h1 className="survey-heading" tabIndex="0">
    SURVEY
    </h1>
      <h2 className="greeting" tabIndex="0"> Hey there music lover! 👋 
      </h2>
      <h3 className="survey-info" tabIndex="0">Yes, we all miss the live gig shenanigans like crazy. In the meantime, 
      let´s take the opportunity to evalute your Stockholm live music scene preferences!
      </h3> 
  </header>
  )
}
export default Header;
