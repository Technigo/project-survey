import React from 'react' 

export const ColorQuestion = ({ color, onColorChange}) => {

  return (
    <div>
    <label>Cats color</label>
    <select
      id="color"
      required
      value={color}
      onChange={(event) => onColorChange(event.target.value)}
      >
      <option value="">Select</option>
      <option value="brown">Brown</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="grey">Grey</option>
      <option value="red">Red</option>
      <option value="mixed colors">Mixed colors</option>
    </select>
    </div>
  )
}
