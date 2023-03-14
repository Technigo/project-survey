import React from 'react';

const ageGroups = [ /* Age group array */
  '0-18',
  '19-30',
  '30+'
];

export const Age = ({ ageGroup, setAgeGroup }) => {
  return (
    <form>
      <h1 className="nametext">Whats your age group?</h1>
      {ageGroups.map((group) => (/* itterates trough the ageGroups array */
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
          key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setAgeGroup(event.target.value)}
            checked={ageGroup === group} />
          {group}
        </label>
      ))}
    </form>
  );
};

