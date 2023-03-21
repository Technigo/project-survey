/// ////////// IMPORTS //////////////// ///

import React from 'react';
import './Price.css';

/// //////// PRICEGROUP VARIABLE //////// ///

const priceGroups = [ /* Price group array */
  '5-15€',
  '15-25€',
  '25€ +'
];

/// ////////// FUNCTION //////////////// ///

export const Price = ({ priceGroup, setPriceGroup }) => {
  return (
    <><h2 className="nametext">PRICE GROUP?</h2>
      <form className="radio-form">
        {priceGroups.map((group) => (/* itterates trough the priceGroups array */
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            className="radio-container"
            key={group}>
            <input
              aria-label="Price Range"
              id="enter-pricegroup"
              className="radio-buttons"
              type="radio"
              value={group}
              onChange={(event) => setPriceGroup(event.target.value)}
              checked={priceGroup === group} />
            <h1 className="pricegrouptext">{group}</h1>
          </label>
        ))}
      </form>
    </>
  );
};

