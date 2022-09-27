import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
      <p>What is your favourite drink?</p>
      <input type="text" value={drink} onChange={handleDrinkChange} />
    </>
  );
}
// göra en type='range'
const satisfactionRating = ['Terrible 😞', 'Bad 🙁', 'Okay 🙂', 'Happy 😊', 'Very happy 😍'];

import React from "react";


const QuestionTwo = ({ questionNum, rating, getRating, satisfactionRating, satisfaction, setSatisfaction }) => {

    setSatisfaction(satisfactionRating[rating]);

   return <div className="question flex">
        <label htmlFor='range'>{questionNum}. How happy are you with the cleanliness?</label>
        <input 
        id='range'
        type='range'
        min='0'
        max={satisfactionRating.length - 1}
        value={rating}
        onChange={e => getRating(e.target.value)} 
        />

         <output className="output" htmlFor='rating'>{satisfaction}</output>

    </div>

