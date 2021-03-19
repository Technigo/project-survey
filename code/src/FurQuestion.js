import React from 'react';

export const FurQuestion = ({ furOption, onfurOptionChange}) => {
  const furArray = ["long-haired", "short-haired", "hair-less"];
  
  return (
    <div>
    What cat-coat do you prefer?
    {furArray.map(fur => (
      <label key={fur}>
        <input
          type='radio'
          name="fur"
          value={fur}
          onChange={(e) => onfurOptionChange(e)}
          checked={furOption === fur}
        />
        {fur}
      </label>
    ))}
  </div>
  );
};
