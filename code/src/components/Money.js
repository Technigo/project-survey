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
            <option value='option1'>For free? I'm broke atm!</option>
            <option value='option2'>I've got a little saved up</option>
            <option value='option3'>Do you take monopoly money?</option>
            <option value='option4'>$Nothing is too expensive$</option>
          </select>
        </label>
        <button onClick={onNextChange}>Next question</button>
      </form>
    </section>
  );
};

export default Money;
