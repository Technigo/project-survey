import React from 'react';

const RadioCarbs = ({ carbs, setCarbs }) => {
  const handleCarbsChange = (event) => {
    setCarbs(event.target.value);
    console.log(carbs)
  }
  return (
    <div className="radio-buttons-carbs">
      <input
        type="radio"
        value="pasta"
        onChange={handleCarbsChange}
        checked={carbs === 'pasta'} /> Pasta

      <input
        type="radio"
        value="potatoes"
        onChange={handleCarbsChange}
        checked={carbs === 'potatoes'} /> Potatoes

      <input
        type="radio"
        value="rice"
        onChange={handleCarbsChange}
        checked={carbs === 'rice'} /> Rice
    </div>
  );
}

export default RadioCarbs;