import React from 'react';

export const Pattern = ({ pattern, setPattern }) => {
  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  return (
    <div>
      <p>
        Which pattern do you prefer?
      </p>
      <input type="text" value={pattern} onChange={handlePatternChange} />
    </div>
  );
};