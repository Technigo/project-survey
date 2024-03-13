
import React from 'react';
import ButtonNext from './ButtonNext';

const monthTypes = ['2034', '2036', '2038', '2040']
const Dates = ({ monthType, onMonthTypeChange, onClickNext }) => {
  return (
    <section className="content-container">
      <h1 className="header-copy">
        When do you wish to travel?
      </h1>
      <div className="month-container">
        {monthTypes.map((type) => (
          <label htmlFor={type} key={type}>
            <input
              id={type}
              type="radio"
              value={type}
              onChange={onMonthTypeChange}
              checked={monthType === type} />
            {type}
          </label>
        ))}
      </div>
      <div className="button-container">
        <ButtonNext button="Next" onClickNext={onClickNext} />
      </div>
    </section>
  );
};

export default Dates;