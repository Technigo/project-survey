import React from 'react';

const priceGroups = [ /* Price group array */
  '5-15€',
  '15-25€',
  '25€ +'
];

export const Price = ({ priceGroup, setPriceGroup }) => {
  return (
    <><h2 className="pricetext">PRICE GROUP?</h2>
      <form className="radio-form">
        {priceGroups.map((group) => (/* itterates trough the priceGroups array */
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            className="radio-container"
            key={group}>
            <input
              aria-label="Enter your price group"
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

