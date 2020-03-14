import React, { useState } from "react";

export const RadioButtonQ = () => {
  const dogNumber = ["1-3", "4-6", "7-10"];
  const [amountOfDogs, setAmountOfDogs] = useState(" ");
  return (
    <form>
      How many dogs do you want:
      {dogNumber.map(number => (
        <label key={number}>
          <input
            type="radio"
            value={number}
            onChange={event => setAmountOfDogs(event.target.value)}
            checked={amountOfDogs === number}
          />
          {number}
        </label>
      ))}
    </form>
  );
};
