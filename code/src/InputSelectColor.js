import React, { useState } from 'react'

// Favourite color
const InputSelectColor = () => {
  const [color, setColor] = useState('');

  return (
    <form className="input-select-color"> Select your favorite color:
      <select
        onChange={event => setColor(event.target.value)}
        value={color}
      >
        <option value="">Select color</option>
        <option value="white">white</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
        <option value="red">red</option>
        <option value="pink">pink</option>
        <option value="lilac">lilac</option>
        <option value="blue">blue</option>
        <option value="turqouise">turqouise</option>
        <option value="green">green</option>
        <option value="brown">brown</option>
        <option value="black">black</option>
      </select>
    </form>
  );
};
export default InputSelectColor