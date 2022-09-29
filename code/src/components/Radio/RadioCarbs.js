import React from 'react';

const RadioCarbs = ({ carbs, setCarbs }) => {
  const handleCarbsChange = (event) => {
    setCarbs(event.target.value);
  }
  return (
    <div>
      <input
        type="radio"
        value="Pasta"
        onChange={handleCarbsChange}
        checked={carbs === 'Pasta'} /> Pasta

      <input
        type="radio"
        value="Potatoes"
        onChange={handleCarbsChange}
        checked={carbs === 'Potatoes'} /> Potatoes

      <input
        type="radio"
        value="Rice"
        onChange={handleCarbsChange}
        checked={carbs === 'Rice'} /> Rice
    </div>
  );
}

export default RadioCarbs;