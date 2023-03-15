import React from 'react';
import './Dropdown.css';

export const Food = ({ food, setFood }) => {
  const handleFood = (event) => {
    setFood(event.target.value);
  }
  return (
    <div className="dropdown">
      <form>
        What is your favourite food?
        <select
          onChange={handleFood}
          value={food}>
          <option value=" ">Food:</option>
          <option value="sushi">Sushi</option>
          <option value="pizza">Pizza</option>
          <option value="pasta">Pasta</option>
          <option value="hamburger">Hamburger</option>
          <option value="salad">Salad</option>
          <option value="tacos">Tacos</option>
          <option value="husmanskost">Husmanskost</option>
        </select>
      </form>
    </div>
  );
}

export default Food;