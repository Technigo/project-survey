import React from 'react';
import { Button } from 'components/Button';

export const HowManyConcerts = ({ name, numberOfConcerts, setNoConcerts }) => {
  const handleNumberOfConcerts = (event) => {
    setNoConcerts(event.target.value)
  }
  return (
    <>
      <p>Alright {name}, how many concerts do you visit in a year?</p>
      <label htmlFor="noOfConcerts">
        <select
          id="noOfConcerts"
          onChange={handleNumberOfConcerts}
          value={numberOfConcerts}
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