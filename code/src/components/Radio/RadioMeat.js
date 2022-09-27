import React, { useState } from 'react';

const meatOptions = ['Pork', 'Beef', 'Chicken'];

const RadioMeat = () => {
  const [selectedRadio, setSelectedRadio] = useState();

  return (
    <form>
      {meatOptions.map((meat) => (
        <label key={meat} htmlFor="meat">
          <input
            id="meat"
            name="meat"
            type="radio"
            value={meat}
            onChange={(event) => setSelectedRadio(event.target.value)}
            checked={selectedRadio === meat} />
          {meat}
        </label>
      ))}
    </form>
  );
};

export default RadioMeat;