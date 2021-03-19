import React from 'react'

import Wine from './Wine.jpg'

export const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="header-image" src={Wine} alt="Bottles of wine" />
      </div>
      <div className="header-welcome">
        <h1>
            Welcome to the Wineyard
        </h1>
      </div>
      <div className="header-text">
        <h2>
                    We deliver wine from southern europe to your door!
        </h2>
      </div>
    </header>
  )
}