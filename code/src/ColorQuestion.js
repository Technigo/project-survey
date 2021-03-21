import React from 'react' 

export const ColorQuestion = ({ color, onColorChange}) => {

  return (
    <div className="color-question">
    <label tabIndex="0">What color do you like a cat to have?</label>
    <select
      tabIndex="0"
      className="select"
      required
      value={color}
      onChange={(e) => onColorChange(e)}
      >
      <option tabIndex="0" value="">Select</option>
      <option tabIndex="0" value="brown">Brown</option>
      <option tabIndex="0" value="black">Black</option>
      <option tabIndex="0" value="white">White</option>
      <option tabIndex="0" value="grey">Grey</option>
      <option tabIndex="0" value="red">Red</option>
      <option tabIndex="0" value="has mixed colors">Mixed</option>
    </select>
    </div>
  );
};
