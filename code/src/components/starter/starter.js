import React from 'react';
import './starter.css';
import bruschetta from '../../images/bruschetta.jpg'
import tagliere from '../../images/tagliere.jpg'
import snacks from '../../images/snacks.jpg'

export const Starter = ({ starter, setStarter, handleStepIncrease }) => {
  const handleStarterChange = (event) => {
    setStarter(event.target.value);
  }
  return (
    <div className="starter-container">
      <p>Which starter do you want?</p>
      <div className="image-container-starter">
        <img src={bruschetta} alt="bruschetta" />
        <img src={tagliere} alt="tagliere" />
        <img src={snacks} alt="snacks" />
      </div>
      <form>
        <select
          onChange={handleStarterChange}
          value={starter}>
          <option value="" disabled>Select starter</option>
          <option value="bruschetta">Bruschetta</option>
          <option value="tagliere">Tagliere</option>
          <option value="snacks">Snacks</option>
        </select>
      </form>
      <div>
        <button className="step-btn" type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  )
}