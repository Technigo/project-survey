import React from 'react';

const Drink = ({ drink, setDrink, handleStepIncrease, handleStepDecrease}) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <section className="container">
          <div className="input-card">
          <h3>Why did the chicken cross the road?</h3>
          <label>
            <select
              className="dropdown"
              onChange={handleDrinkChange}
              value={drink}
              >
          
              <option value="Select answer">Select answer:</option>
              <option value="It thought it was an egg-cellent idea">It thought it was an egg-cellent idea</option>
              <option value="Just beak-cause he could">Just beak-cause he could</option>
              <option value="To avoid this joke">To avoid this joke</option>
        
            </select>
           </label> 
          </div> 
          <div className="button-card">
          <button type="button" onClick={handleStepDecrease}>Previous question</button>
          <button type="button" onClick={handleStepIncrease}>Submit</button>
        
          </div>
    </section>
  );
}
export default Drink