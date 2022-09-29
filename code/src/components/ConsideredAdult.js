/* eslint-disable no-restricted-globals */
import React from 'react';

const ConsideredAdult = ({ setAdultAge, adultAge }) => {
  return (
    <>
      <label htmlFor="age-range">
        18
        <input
          type="radio"
          value="18"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '18'}
          name="age"
          id="age-range" />
      </label>
      <br />
      <label htmlFor="age-range">
        25
        <input
          type="radio"
          value="25"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '25'}
          name="age"
          id="age-range" />
      </label>
      <br />
      <label htmlFor="age-range">
        30-35
        <input
          type="radio"
          value="30-35"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '30-35'}
          name="age"
          id="age-range" />
      </label>
      <br />
      <label htmlFor="age-range">
        40 +
        <input
          type="radio"
          value="40 +"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '40 +'}
          name="age"
          id="age-range" />
      </label>
      <br />
      <label htmlFor="age-range">
        50 +
        <input
          type="radio"
          value="50 +"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '50 +'}
          name="age"
          id="age-range" />
      </label>

    </>
  )
}

export default ConsideredAdult;