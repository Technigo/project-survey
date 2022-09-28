/* eslint-disable no-trailing-spaces */
import React from 'react';

const Thirdquestion = ({ service, onServiceChange, onCounterChange }) => {
  return (
    <>
      <p>What is the best feature at our cake shop?</p>
      <select
        onChange={onServiceChange}
        value={service}>

        <option value="">Select service</option>
        <option value="Helpful Employees">Friendly Employees</option>
        <option value="Our App">Our App</option>
        <option value="Cosy Environment">Cosy Environment</option>
      </select><button className="button" type="button" onClick={onCounterChange}>Next Question</button>
    </>
  );
};

export default Thirdquestion;