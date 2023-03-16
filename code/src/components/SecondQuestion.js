import React from 'react';
import { Button } from 'components/button';

export const SecondQuestion = ({ name, numberOfTravels, setOftenTravels }) => {
  const handleNumberOfTravels = (event) => {
    setOftenTravels(event.target.value)
  }
  return (
    <>
      <label htmlFor="oftenTravels">
        Alright {name}, how often do you travel in a year?
        <select
          id="oftenTravels"
          onChange={handleNumberOfTravels}
          value={numberOfTravels}
          required>
          <option value="">Select number:</option>
          <option value="0-2">0-2</option>
          <option value="3-5">3-5</option>
          <option value="5+">5+</option>
        </select>
      </label>
      <Button button="Next question" />
    </>
  );
}