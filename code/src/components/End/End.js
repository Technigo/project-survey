import React from 'react';

const End = ({ carbs, fish, meat, vegetarian, protein, selected, selectedSides, text }) => {
  return (
    <div className="main-container">
      <div>
        <h1>Thank you for your answers!</h1>
        <p>Your current hunger level is: {selected} </p>
        <p>Your preferred protein is {protein}, {meat}{vegetarian}{fish} specifically </p>
        <p>Which carb you like: {carbs} </p>
        <p>For sides, you want {selectedSides} </p>
        <p>Other stuff you want to eat: {text} </p>
      </div>
    </div>
  );
};

export default End;