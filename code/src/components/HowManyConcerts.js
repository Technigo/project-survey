import React from 'react';

export const HowManyConcerts = ({ name, numberOfConcerts, setNoConcerts }) => {
  const handleNumberOfConcerts = (event) => {
    setNoConcerts(event.target.value)
  }
  return (
    <form>
      <p>Alright {name}, how many concerts do you visit in a year?</p>
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