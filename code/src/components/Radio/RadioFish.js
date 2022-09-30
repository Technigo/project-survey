import React from 'react';

const RadioFish = ({ fish, setFish }) => {
  const handleFishChange = (event) => {
    setFish(event.target.value);
    console.log(fish)
  }
  return (
    <div className="radio-buttons-fish">
      <label htmlFor="RadioButton">
        <input
          type="radio"
          value="cod"
          onChange={handleFishChange}
          checked={fish === 'cod'} /> Cod

        <input
          type="radio"
          value="salmon"
          onChange={handleFishChange}
          checked={fish === 'salmon'} /> Salmon

        <input
          type="radio"
          value="shrimp"
          onChange={handleFishChange}
          checked={fish === 'shrimp'} /> Shrimp
      </label>
    </div>
  );
}

export default RadioFish;