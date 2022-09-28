import React from 'react';

const QuestionDropdownNumber = (props) => {
  const { number, setNumber } = props

  return (
    <form className="numberOfBooks">
      <p> How many books do you read or listen to during a year?</p>
      <select
        className="dropdown"
        onChange={(event) => setNumber(event.target.value)}
        value={number}>
        <option value="">Select:</option>
        <option value="0-5">0-5</option>
        <option value="6-10">6-10</option>
        <option value="more than 10">10 and more</option>
      </select>
    </form>
  );
}

export default QuestionDropdownNumber;