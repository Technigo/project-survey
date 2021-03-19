import React from 'react';

export const FurQuestion = ({ furOption, onfurOptionChange}) => {
  const furArray = ["long hair", "short hair", "no hair"];

  return (
    <div>
    What kinds of cat do you like?
    {furArray.map(fur => (
      <label key={fur}>
        <input
          type='radio'
          value={fur}
          onChange={(event) => onfurOptionChange(event.target.value)}
          checked={furOption === fur}
          required
        />
        {fur}
      </label>
    ))}
  </div>
  );
};
