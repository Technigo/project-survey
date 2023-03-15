import React from 'react';

const priceGroups = [ /* Age group array */
  '5-15€',
  '15-25€',
  '25€ +'
];

export const Price = ({ priceGroup, setPriceGroup }) => {
  return (
    <><h1 className="pricetext">Price group?</h1>
      <form className="radio-form">
        {priceGroups.map((group) => (/* itterates trough the ageGroups array */
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            className="radio-container"
            key={group}>
            <input
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

