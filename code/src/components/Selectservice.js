/* eslint-disable no-trailing-spaces */
import React from 'react';

const Selectservice = ({ service, onServiceChange, onCounterChange }) => {
  return (
    <div className="container">
      <form className="service-select">
        <h3>What is the best service at our cake shop?</h3>
        <select
          onChange={onServiceChange}
          value={service}
          className="service-option">

          <option disabled value="">Select service</option>
          <option value="helpful employees">Friendly Employees</option>
          <option value="our app">Our App</option>
          <option value="cosy environment">Cosy Environment</option>
          <option value="our delivery servicce">Our Delivery Service</option>
          <option value="the membership program">Membership Program</option>
        </select>
        <button className="button" type="button" onClick={onCounterChange}>Next Question</button>
      </form>
      
    </div>
  );
};

export default Selectservice;