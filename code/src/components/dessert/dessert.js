import React from 'react';
import './dessert.css';
import tiramisu from '../../images/tiramisu.jpg'
import cake from '../../images/cake.jpg'
import gelato from '../../images/gelato.jpg'

export const Dessert = ({ dessert, setDessert }) => {
  const handleDessertChange = (event) => {
    setDessert(event.target.value);
  }
  return (
    <div className="dessert-container">
      <h1>Welcome to the nonna restaurant</h1>
      <h2>Help us make a menu that suits you best!</h2>
      <p>Which Dessert do you want?</p>
      <div className="image-container-dessert">
        <img src={tiramisu} alt="tiramisu" />
        <img src={cake} alt="cake" />
        <img src={gelato} alt="gelato" />
      </div>
      <form className="selector">
        <select
          onChange={handleDessertChange}
          value={dessert}>
          <option value="" disabled>Select Dessert</option>
          <option value="tiramisu">tiramisu</option>
          <option value="cake">cake</option>
          <option value="gelato">gelato</option>
        </select>
      </form>
    </div>
  )
}