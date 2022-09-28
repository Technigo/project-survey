import React from 'react';

const Food = ({food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
      <p>What is your favourite food?</p>
      <input type="text" value={food} onChange={handleFoodChange} />
    </>
  );
}
export default Food

