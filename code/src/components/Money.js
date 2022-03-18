import React from 'react';

const Money = ({ money, onMoneyChange, onNextChange, onBackChange }) => {
  return (
    <section className='container'>
      <div className='background-transparent'>
        <form>
          <h2 className='page-title'>
            How much do you want to spend on vacation?
          </h2>
          <label htmlFor='money'>
            <select
              value={money}
              onChange={(event) => onMoneyChange(event.target.value)}>
              <option value='none'>Select an option</option>
              <option value='I`m broke atm!'>I'm broke atm!</option>
              <option value='I`ve got a little saved up'>
                I've got a little saved up
              </option>
              <option value='Do you take monopoly money?'>
                Do you take monopoly money?
              </option>
              <option value='$Nothing is too expensive$'>
                $Nothing is too expensive$
              </option>
            </select>
          </label>
        </form>
        <button className='btn' type='submit' onClick={onBackChange}>
          Back
        </button>
        <button className='btn' onClick={onNextChange} disabled={money === ''}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Money;
