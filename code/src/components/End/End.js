import React from 'react';

const End = ({ carbs, protein, meat, fish, vegetarian, selected, selectedSides, text }) => {
  console.log(protein)
  return (
    <div className="main-container">
      <div>
        <h1>Thank you for your answers!</h1>
        <p>Your current hunger level is: <b>{selected}</b></p>
        <p>You&#39;d like to eat <b>{protein}</b>, specifically <b>{meat}{fish}{vegetarian}</b></p>
        <p>Which carb you&#39;d like: <b>{carbs}</b></p>
        <p>For sides, you want <b>{selectedSides}</b></p>
        <p>Other stuff you want to eat: <b>{text}</b></p>
      </div>
    </div>
  );
};

export default End;