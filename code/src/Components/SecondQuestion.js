import React from 'react';

export const SecondQuestion = ({ foodNoun, setFoodNoun }) => {
  const handleSecondAnswer = (event) => {
    setFoodNoun(event.target.value);
  }
  return (
    <>
      <p className="instructionText"> Write a food-related noun in plural.</p>
      <p className="descriptiveText"> Example: buns, chickens, sausages</p>
      <input className="input-field" type="text" value={foodNoun} onChange={handleSecondAnswer} />
    </>
  )
}