import React from 'react';

export const SecondQuestion = ({ foodNoun, setFoodNoun }) => {
  const handleSecondAnswer = (event) => {
    setFoodNoun(event.target.value);
  }
  return (
    <>
      <p> Write a noun that is food-related.</p>
      <input type="text" value={foodNoun} onChange={handleSecondAnswer} />
    </>
  )
}