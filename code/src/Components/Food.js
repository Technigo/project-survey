import React from 'react';

export const Food = ({ food, setFood }) => {
  const handleDrinkChange = (event) => {
    setFood(event.target.value);
  }

  return (
    <form>
      <h2 className="nametext">WHATS ON THE PLATE?</h2>
      <input
        className="name-input"
        type="text"
        value={food}
        onChange={handleDrinkChange}
        required />
    </form>
  );
}