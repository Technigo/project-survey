import React, { useState } from "react"
import './radioButtons.css'

const spiritAnimals = ["Snake", "Butterfly", "Dolphin", "Eagle", "Hippo"];

export const RadioButtons = () => {
  const [animals, setAnimals] = useState();

  return (
    <div className="radioContainer">
      Spirit animal:
      {spiritAnimals.map(animal => (
        <label key={animal}>
          <input
            type="radio"
            name="animal"
            value={animal}
            onChange={event => setAnimals(event.target.value)}
            checked={animals === animal}
            required
          />
          {animal}
        </label>
      ))}
    </div>
  );
};