import React from 'react' 

export const ColorQuestion = ({ color, onColorChange}) => {

  return (
    <div className="color-question">
    <label tabIndex="0">What color do you like a cat to have?</label>
    <select
      tabIndex="0"
      id="color"
      className="select"
      required
      value={color}
      onChange={(e) => onColorChange(e)}
      >
      <option value="">Select</option>
      <option value="brown">Brown</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="grey">Grey</option>
      <option value="red">Red</option>
      <option value="mixed colors">Mixed</option>
    </select>
    </div>
  );
};
