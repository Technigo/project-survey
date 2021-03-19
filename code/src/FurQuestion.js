import React from 'react';

export const FurQuestion = ({ furOption, onfurOptionChange}) => {
  const furArray = ["long-haired", "short-haired", "hair-less"];
  
  return (
    <div className="fur-question">
    What cat-coat do you prefer?
    {furArray.map(fur => (
      <label className="fur-buttons" key={fur}>
        <input
          type='radio'
          name="fur"
          value={fur}
          onChange={(e) => onfurOptionChange(e)}
    
        />
        {fur}
      </label>
    ))}
  </div>
  );
};
