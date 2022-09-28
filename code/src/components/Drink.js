import React from 'react';

const Drink = ({ drink, setDrink, handleStepIncrease, handleStepDecrease}) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <section className="container">
          <div className="input-card">
          <p>What is your favourite drink ?</p>
          <form>
            <select
              onChange={handleDrinkChange}
              value={drink}
              >
              <option value="Select location">Select location:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
           </form> 
          </div> 
          <div className="button-card">
          <button type="button" onClick={handleStepDecrease}>Previous question</button>
          <button type="button" onClick={handleStepIncrease}>Submit</button>
        
          </div>
    </section>
  );
}
export default Drink