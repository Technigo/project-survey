import React, { useState } from 'react';

const RadioButtons = () => {
  const [ageGroup, setAgeGroup] = useState('')
  return (
    <form onSubmit={(event) => event.preventDefault()}>
        Age group:
      <label>
        <input
          type="radio"
          value="0-18"
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === "0-18"} />
        0-18
      </label>
      <label>
        <input
          type="radio"
          value="19-30"
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === "19-30"} />
        19-30
      </label>
      <label>
        <input
          type="radio"
          value="31+"
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === "31+"} />
        31+
      </label>
    </form>
  )
}

export default RadioButtons;