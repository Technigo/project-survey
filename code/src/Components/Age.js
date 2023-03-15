import React from 'react';

const ageGroups = [ /* Age group array */
  '5-15€',
  '15-25€',
  '25€ +'
];

export const Age = ({ ageGroup, setAgeGroup }) => {
  return (
    <form>
      <h1 className="agetext">Price group?</h1>
      {ageGroups.map((group) => (/* itterates trough the ageGroups array */
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
          key={group}>
          <input
            className="radio-buttons"
            type="radio"
            value={group}
            onChange={(event) => setAgeGroup(event.target.value)}
            checked={ageGroup === group} />
          <h1 className="agetext">{group}</h1>
        </label>
      ))}
    </form>
  );
};

