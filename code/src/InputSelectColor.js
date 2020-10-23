import React from 'react'

// Favourite color
const InputSelectColor = ({id, question, setColor, color}) => {
  

  return (
    <> 
     <label htmlFor={id}>
       <h3>{question}</h3> 
      <select 
        className="input-select-color"
        onChange={event => setColor(event.target.value)}
        value={color}
      >
        <option value="">Select color</option>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="pink">Pink</option>
        <option value="lilac">Lilac</option>
        <option value="blue">Blue</option>
        <option value="turqouise">Turqouise</option>
        <option value="green">Green</option>
        <option value="brown">Brown</option>
        <option value="black">Black</option>
      </select>
      </label>
     </> 
  );
};
export default InputSelectColor;