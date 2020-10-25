import React, { useState } from 'react';

export const Colorpicker = (props) => {
  const [color, setColor] = useState('#e66465');

  const handleChange = (event) => {
    setColor(event.target.value);
  }

  const clickNextButton = () => {
    props.onChange(color);
  }

  return (
    <div className="question-container">
      <label htmlFor="color" className="question-label">{props.text}  </label>
      <input
        type="color"
        id="color"
        name="favcolor"
        value={color}
        onChange={handleChange} />

      <button
        className="next-button"
        type="button"
        onClick={() => clickNextButton()}>
            &#x3e;&#x3e;
      </button>
    </div>
  )
}
