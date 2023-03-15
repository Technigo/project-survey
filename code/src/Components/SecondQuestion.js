import React from 'react';

export const SecondQuestion = ({ foodNoun, setFoodNoun }) => {
  const handleSecondAnswer = (event) => {
    setFoodNoun(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write a food-related noun in plural.</p>
      <input type="text" value={foodNoun} onChange={handleSecondAnswer} />
    </>
  )
}