import React from 'react';

export const Sandwich = ({ sandwich, setSandwich }) => {
  const handleSandwichChange = (event) => {
    setSandwich(event.target.value);
  }
  return (
    <div className="outerWrapper">
      <div className="questionContainer">
        <img className="questionImage" alt="avocado toast" src="https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" />
        <p>What kind of sandwich do you prefer?</p>
        <div className="SandwichInputContainer">
          <select className="sandwichInput" type="text" value={sandwich} onChange={handleSandwichChange}>
            <option>Choose a sandwich</option>
            <option value="Avocado toast"> Avcodaco toast </option>
            <option value="Salmon Bagel"> Bagel with salmon</option>
            <option value="Eggs Benedict"> Eggs benedict</option>
          </select>
        </div>
      </div>
    </div>
  );
}