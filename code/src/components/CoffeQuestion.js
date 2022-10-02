import React from 'react';

const CoffeQuestion = ({ numberOfCoffee, setnumberOfCoffee }) => {
  return (
    <select
      className="dropdown-select"
      onChange={(event) => setnumberOfCoffee(event.target.value)}
      value={numberOfCoffee}
      required>
      <option disabled value="">How many cups off coffee do you drink per day?</option>
      <option value="none">none</option>
      <option value="1-3">1-3 cups</option>
      <option value="4-7">4-7 cups</option>
      <option value="8+">8+ cups</option>
    </select>
  );
};
export default CoffeQuestion