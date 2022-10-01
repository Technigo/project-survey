import React from 'react';

const RadioButton = ({ valuedTrait, setValuedTrait, radioSelection }) => {
  return (
    <label className="radio-label" htmlFor={radioSelection}>
      {radioSelection}
      <input
        type="radio"
        className="input-field"
        value={radioSelection}
        onChange={(event) => setValuedTrait(event.target.value)}
        checked={valuedTrait === radioSelection}
        name="trait"
        id={radioSelection}
        required />
    </label>
  )
}

export default RadioButton;