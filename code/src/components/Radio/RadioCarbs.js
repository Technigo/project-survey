import React, { useState } from 'react';

const carbOptions = ['Pasta', 'Potatoes', 'Rice'];

const RadioCarbs = () => {
  const [selectedRadio, setSelectedRadio] = useState();

  return (
    <form>
      {carbOptions.map((carbs) => (
        <label key={carbs} htmlFor="carbs">
          <input
            id="carbs"
            name="carbs"
            type="radio"
            value={carbs}
            onChange={(event) => setSelectedRadio(event.target.value)}
            checked={selectedRadio === carbs} />
          {carbs}
        </label>
      ))}
    </form>
  );
};

export default RadioCarbs;