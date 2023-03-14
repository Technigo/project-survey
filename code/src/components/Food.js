import React from 'react';

export const Food = ({ food, setFood }) => {
  const handleFood = (event) => {
    setFood(event.target.value);
  }
  return (
    <form>
        What is your favourite food?
      <select
        onChange={handleFood}
        value={food}>
        <option value=" ">Food:</option>
        <option value={food}>Sushi</option>
        <option value={food}>Pizza</option>
        <option value={food}>Pasta</option>
        <option value={food}>Hamburger</option>
        <option value={food}>Salad</option>
        <option value={food}>Tacos</option>
        <option value={food}>Husmanskost</option>
      </select>
    </form>
  );
}

export default Food;