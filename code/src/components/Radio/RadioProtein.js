import React, { useState } from 'react';

const proteinOptions = ['Meat', 'Fish', 'Vegetarian'];

const RadioProtein = () => {
  const [selectedRadio, setSelectedRadio] = useState();

  return (
    <form>
      {proteinOptions.map((protein) => (
        <label key={protein} htmlFor="protein">
          <input
            id="protein"
            name="protein"
            type="radio"
            value={protein}
            onChange={(event) => setSelectedRadio(event.target.value)}
            checked={selectedRadio === protein} />
          {protein}
        </label>
      ))}
    </form>
  );
};

export default RadioProtein;