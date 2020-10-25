import React from 'react'

const InputSelectColor = ({id, question, setColor, color}) => {
  
  return (
    <div className="input-color"> 
      <label className="input-color-text" htmlFor={id}>
        <h3 tabIndex="0">{question}</h3> 
        <select 
          tabIndex="0"
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
          <option value="turquoise">Turquoise</option>
          <option value="green">Green</option>
          <option value="brown">Brown</option>
          <option value="black">Black</option>
        </select>
      </label>
    </div> 
  );
};
export default InputSelectColor;