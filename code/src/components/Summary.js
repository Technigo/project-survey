import React from 'react';

import Bottles from './Bottles.png'

export const Summary = ({ name, wineColor, country }) => {
  return (
    <div className="summary-container">
      <div className="summary-text">
        <p>
            Thank you for your order {name}! We will surprise you on friday afternoon with two
            different bottles of {wineColor} from {country} to enjoy for the weekend. Cheers!
        </p>
      </div>

      <div>
        <img className="summary-icon" src={Bottles} alt="Two bottles of wine" />
      </div>
    </div>
  )
}