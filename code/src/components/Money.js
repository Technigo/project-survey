import React from 'react';

const Money = ({ money, onMoneyChange }) => {
  return (
    <form>
      <h2>Select money</h2>
      <select
        value={money}
        onChange={(event) => onMoneyChange(event.target.value)}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
        <option value='option4'>Option 4</option>
      </select>
    </form>
  );
};

export default Money;
