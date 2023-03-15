/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Radiobutton.css';

export const Age = ({ age, setAge }) => {
  const handleAge = (event) => {
    setAge(event.target.value);
  }
  return (
    <div className="radiobutton">
      <form>
        <span>What is your age?</span>
        <label>
          <input
            type="radio"
            value="10-19"
            onChange={handleAge}
            checked={age === '10-19'} />
          10-19
        </label>
        <label>
          <input
            type="radio"
            value="20-29"
            onChange={handleAge}
            checked={age === '20-29'} />
          20-29
        </label>
        <label>
          <input
            type="radio"
            value="30-39"
            onChange={handleAge}
            checked={age === '30-39'} />
          30-39
        </label>
        <label>
          <input
            type="radio"
            value="40-49"
            onChange={handleAge}
            checked={age === '40-49'} />
          40-49
        </label>
        <label>
          <input
            type="radio"
            value="50+"
            onChange={handleAge}
            checked={age === '50+'} />
          50+
        </label>
      </form>
    </div>
  );
}

export default Age;