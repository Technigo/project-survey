/* eslint-disable no-trailing-spaces */
import React from 'react';

const Selectservice = ({ service, onServiceChange, onCounterChange }) => {
  return (
    <div className="container">
      <h3>What is the best service at our cake shop?</h3>
      <form>
        <label htmlFor="service" className="service-select">
          <select
            onChange={onServiceChange}
            value={service}
            className="service-option"
            required>

            <option disabled value="">Select service</option>
            <option value="helpful employees">Friendly Employees</option>
            <option value="our app">Our App</option>
            <option value="cosy environment">Cosy Environment</option>
            <option value="our delivery service">Our Delivery Service</option>
            <option value="the membership program">Membership Program</option>
          </select>
          <button 
            type="button" 
            onClick={onCounterChange} 
            disabled={service === ''}>
            Next Question
          </button>
        </label>
      </form>
    </div>
  );
};

export default Selectservice;