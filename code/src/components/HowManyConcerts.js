import React from 'react';

export const HowManyConcerts = ({ numberOfConcerts, setNoOfConcerts }) => {
  const handleNumberOfConcerts = (event) => {
    setNoOfConcerts(event.target.value)
  }
  return (
    <form>
      <p>How many concerts do you visit in a year?</p>
      <select
        onChange={handleNumberOfConcerts}
        value={numberOfConcerts}>
        <option value="">Select number:</option>
        <option value="0-2">0-2</option>
        <option value="3-5">3-5</option>
        <option value="5+">5+</option>
      </select>
    </form>
  );
}