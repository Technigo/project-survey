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
        <option value="up to 5">0-5</option>
        <option value="5 to 10">6-10</option>
        <option value="10andMore">10 and more</option>
      </select>
    </form>
  );
}

export default QuestionDropdownNumber;