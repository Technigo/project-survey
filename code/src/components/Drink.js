import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  return (
    <div className="question-wrapper">
      <div className="question">
        <label htmlFor="range">On a scale of 0-10 how happy are you with Earth? would you recommend it to others?{drink}</label>
        <input
          id="range"
          type="range"
          min="0"
          max="10"
          value={drink}
          onChange={(e) => setDrink(e.target.value)} />
        <div className="range-display">
          {drink}
        </div>
      </div>
    </div>
  );
}
// göra en type='range'
// const satisfactionRating = ['Terrible 😞', 'Bad 🙁', 'Okay 🙂', 'Happy 😊', 'Very happy 😍'];

/* import React from "react";

const QuestionTwo = ({ questionNum, rating, getRating, satisfactionRating, satisfaction, setSatisfaction }) => {

    setSatisfaction(satisfactionRating[rating]);

   return <div className="question flex">
        <label htmlFor='range'>{questionNum}. How happy are you with the cleanliness?</label>
        <input
        id='range'
        type='range'
        min='0'
        max={satisfactionRating.length - 1}
        value={drink}
        onChange={e => setDrink(e.target.value)}
        />

         <output className="output" htmlFor='rating'>{satisfaction}</output>

    </div>
 */
