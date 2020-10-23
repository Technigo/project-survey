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
      </label>
     </> 
  );
};
export default InputSelectColor