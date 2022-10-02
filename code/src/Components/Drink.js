import React from 'react'

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }

  return (
    <form>
      <div className="drinkComponent">
        <h2>What drink would you like as a reward for surviving another day of coding?</h2>

        <select
          onChange={handleDrinkChange}
          className="selectDropdown"
          aria-label="Select drink"
          tabIndex="0"
          value={drink}>
          <option value="">Select drink</option>
          <option value="Water">Water to stay hydrated and fresh</option>
          <option value="Beer">Beer is always a good idea!</option>
          <option value="Gin and tonic">Gin and tonic, please</option>
          <option value="Coke">One coke a day keeps the doctor away</option>
          <option value="Champagne">Champagne for everybody!</option>
        </select>
      </div>
    </form>
  )
}