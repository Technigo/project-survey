import React from 'react';
import './starter.css';
import bruschetta from '../../images/bruschetta.jpg'
import tagliere from '../../images/tagliere.jpg'
import snacks from '../../images/snacks.jpg'

export const Starter = ({ starter, setStarter }) => {
  const handleStarterChange = (event) => {
    setStarter(event.target.value);
  }
  return (
    <div className="starter-container">
      <h1>Welcome to the nonna restaurant</h1>
      <h2>Help us make a menu that suits you best!</h2>
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
    </div>
  )
}