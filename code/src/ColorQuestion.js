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
      <option value="Brown">Brown</option>
      <option value="Black">Black</option>
      <option value="White">White</option>
    </select>
    </div>
  )
}
