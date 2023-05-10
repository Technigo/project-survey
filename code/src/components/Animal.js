/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Animal = ({ animal, setAnimal }) => {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  }
  return (
    <div className="choices-wrapper">
      <label className="input-label" htmlFor="pick-animal">Pick any animal.</label>
      <input id="pick-animal" name="pick-animal" placeholder="like cat, dog, donkey..." type="text" minLength="1" value={animal} onChange={handleAnimalChange} required="required" />
    </div>
  );
}