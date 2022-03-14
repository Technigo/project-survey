import React, { useState } from 'react'

const PreferredHoursInput = ({ changePage, retrieveLocationData }) => {
  const [location, setLocation] = useState();

  return (
    <section className='page'>
      <h2><span className='symbols'>3. </span>
        How would you prefer to work?
        <span className='symbols'> *</span>
      </h2>
      <form>
        <label htmlFor='locationsOptions'>
          Choose a location:
          <select
            onChange={event => setLocation(event.target.value)}
            value={location}
            id='locationsOptions'
          >
            <option disabled selected value>-- select an option -- </option>
            <option value='in office'>Fully at the office</option>
            <option value='mostly in office'>Most days at the office</option>
            <option value='hybrid'>Hybrid (50 - 50)</option>
            <option value='mostly remote'>Most days remote</option>
            <option value='remote'>Fully remote</option>
          </select>
        </label>
      </form>
      <button
        disabled={!location}
        onClick={() => {
          changePage();
          retrieveLocationData(location)
        }}>Next
      </button>
    </section>
  )
}

export default PreferredHoursInput;
