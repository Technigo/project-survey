import React from 'react';

const End = ({ carbs, protein, meat, fish, vegetarian, selected, selectedSides, text }) => {
  console.log(protein)
  return (
    <div className="main-container">
      <div>
        <h1>Thank you for your answers!</h1>
        <p>Your current hunger level is: {selected}</p>
        <p>Your preferred protein is {protein}, specifically {meat}{fish}{vegetarian}</p>
        <p>Which carb you like: {carbs}</p>
        <p>For sides, you want {selectedSides}</p>
        <p>Other stuff you want to eat: {text}</p>
      </div>
    </div>
  );
};

export default End;