import React from 'react';

const RadioFish = ({ fish, setFish }) => {
  const handleFishChange = (event) => {
    setFish(event.target.value);
  }
  return (
    <div>
      <label htmlFor="RadioButton">
        <input
          type="radio"
          value="Cod"
          onChange={handleFishChange}
          checked={fish === 'Cod'} /> Cod

        <input
          type="radio"
          value="Salmon"
          onChange={handleFishChange}
          checked={fish === 'Salmon'} /> Salmon

        <input
          type="radio"
          value="Shrimp"
          onChange={handleFishChange}
          checked={fish === 'Shrimp'} /> Shrimp
      </label>
    </div>
  );
}

export default RadioFish;