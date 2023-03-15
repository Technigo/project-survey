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
        <span className="title">What is your age?</span>
        <label>
          <input
            type="radio"
            value="10-19"
            onChange={handleAge}
            checked={age === '10-19'} />
          <span className="value">10-19</span>
        </label>
        <label>
          <input
            type="radio"
            value="20-29"
            onChange={handleAge}
            checked={age === '20-29'} />
          <span className="value">20-29</span>
        </label>
        <label>
          <input
            type="radio"
            value="30-39"
            onChange={handleAge}
            checked={age === '30-39'} />
          <span className="value">30-39</span>
        </label>
        <label>
          <input
            type="radio"
            value="40-49"
            onChange={handleAge}
            checked={age === '40-49'} />
          <span className="value">40-49</span>
        </label>
        <label>
          <input
            type="radio"
            value="50+"
            onChange={handleAge}
            checked={age === '50+'} />
          <span className="value">50+</span>
        </label>
      </form>
    </div>
  );
}

export default Age;