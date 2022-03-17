import React from 'react';

const Money = ({ money, onMoneyChange, onNextChange }) => {
  return (
    <section className='container'>
      <form>
        <h2>Select money</h2>
        <label htmlFor='money'>
          <select
            value={money}
            onChange={(event) => onMoneyChange(event.target.value)}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
            <option value='option4'>Option 4</option>
          </select>
        </label>
        <button onClick={onNextChange}>Next question</button>
      </form>
    </section>
  );
};

export default Money;
