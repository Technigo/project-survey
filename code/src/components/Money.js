import React from 'react';

const Money = ({ money, onMoneyChange, onNextChange }) => {
  return (
    <section className='container'>
      <form>
        <h2 className='page-title'>
          How much do you want to spend on vacation?
        </h2>
        <label htmlFor='money'>
          <select
            value={money}
            onChange={(event) => onMoneyChange(event.target.value)}>
            <option value='none'>Select an option</option>
            <option value='free'>I'm broke atm!</option>
            <option value='some'>I've got a little saved up</option>
            <option value='monopoly'>Do you take monopoly money?</option>
            <option value='rich'>$Nothing is too expensive$</option>
          </select>
        </label>
        <button onClick={onNextChange}>Next question</button>
      </form>
    </section>
  );
};

export default Money;
