import React from 'react';

export const Pancakes = ({ pancakes, setPancakes }) => {
  const handlePancakesChange = (event) => {
    setPancakes(event.target.value);
  }
  return (
    <div className="outerWrapper">
      <div className="questionContainer">
        <img className="questionImage" alt="avocado toast" src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        <p>Time to pick your pancakes!</p>
        <div className="radioButtonContainer">
          <input type="radio" value="Blueberries" onChange={handlePancakesChange} checked={pancakes === 'Blueberries'} /> Blueberry please!
          <input type="radio" value="Maple Suryp" onChange={handlePancakesChange} checked={pancakes === 'Maple Suryp'} /> Maple Suryp, yummie!
          <input type="radio" value="Nutella" onChange={handlePancakesChange} checked={pancakes === 'Nutella'} /> Gotta go with Nutella!
        </div>
      </div>
    </div>
  );
}