import React from 'react';

const ConsideredAdult = ({ setAdultAge, adultAge }) => {
  return (
    <div className="question-wrapper">
      <p>At what age do you consider people to be adults?</p>
      <label className="radio-label" htmlFor="18">
        18
        <input
          type="radio"
          value="18"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '18'}
          name="age"
          id="18"
          required />
      </label>

      <label className="radio-label" htmlFor="25">
        25
        <input
          type="radio"
          value="25"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '25'}
          name="age"
          id="25" />
      </label>

      <label className="radio-label" htmlFor="30-35">
        30-35
        <input
          type="radio"
          value="30-35"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '30-35'}
          name="age"
          id="30-35" />
      </label>

      <label className="radio-label" htmlFor="40+">
        40+
        <input
          type="radio"
          value="40 +"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '40 +'}
          name="age"
          id="40+" />
      </label>

      <label className="radio-label" htmlFor="50+">
        50+
        <input
          type="radio"
          value="50 +"
          onChange={(event) => setAdultAge(event.target.value)}
          checked={adultAge === '50 +'}
          name="age"
          id="50+" />
      </label>
    </div>
  )
}

export default ConsideredAdult;