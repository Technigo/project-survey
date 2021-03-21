import React from 'react';

import './Dropdown2.css'

  const Dropdown2 = ({ cost, setCost }) => {

  return (

    <form className="dropdown-cost">
      <label className="cost-heading" htmlFor="cost" tabIndex="0"> Before the pandemic, how much did you usually spend on local live gigs each month?</label>
        <select className="select-cost"
          onChange={event => setCost(event.target.value)} 
          value={cost}
        >
          <option value="" disabled>Select cost:
          </option>
          <option value="0-200">0-200 kr
          </option>
          <option value="200-400">200-400 kr
          </option>
          <option value="400-600">400-600 kr
          </option>
          <option value="600-800">600-800 kr
          </option>
          <option value="800-1000">800-1000 kr
          </option>
          <option value="over1000">Over 1000 kr
          </option>
        </select>
    </form>
  );
}

export default Dropdown2;