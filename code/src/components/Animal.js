/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Animal = ({ animal, setAnimal }) => {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  }
  return (
    <>
      <label className="form-label" htmlFor="animal">Pick an animal.</label>
      <input id="animal" name="animal" placeholder="any animal, like cat" type="text" minLength="1" value={animal} onChange={handleAnimalChange} required="required" />
    </>
  );
}