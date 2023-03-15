/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../index.css';

export const Checkbox = ({ check, setCheck }) => {
  const handleCheckbox = (event) => {
    setCheck(event.target.checked);
  }
  return (
    <form>
      <label>
        <p className="questionTitle">Newsletter?</p>
        <input
          type="checkbox"
          checked={check}
          onChange={handleCheckbox} />
      </label>
    </form>
  );
};