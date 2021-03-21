import React from 'react';

export const FurQuestion = ({ furOption, onfurOptionChange}) => {
  const furArray = ["long-haired", "short-haired", "hair-less"];
  
  return (
    <div className="fur-question" tabIndex="0">
      <h2>What cat-coat do you prefer?</h2>
      {furArray.map(fur => (
        <label tabIndex="0" key={fur}>
          <input
            type='radio'
            name='fur'
            value={fur}
            onChange={(e) => onfurOptionChange(e)}
        />
          {fur}
        </label>
      ))}
    </div>
  );
};
