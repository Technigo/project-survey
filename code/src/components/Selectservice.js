/* eslint-disable no-trailing-spaces */
import React from 'react';

const Selectservice = ({ service, onServiceChange, onCounterChange }) => {
  return (
    <form className="container">
      <h3>What is the best feature at our cake shop?</h3>
      <select
        onChange={onServiceChange}
        value={service}>

        <option value="">Select service</option>
        <option value="Helpful Employees">Friendly Employees</option>
        <option value="Our App">Our App</option>
        <option value="Cosy Environment">Cosy Environment</option>
      </select><button className="button" type="button" onClick={onCounterChange}>Next Question</button>
    </form>
  );
};

export default Selectservice;