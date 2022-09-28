/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

const SecondQuestion = () => {
  const [inputTwo, setInputTwo] = useState('');

  return (
    <>
      <label htmlFor="age-range">
        0-20
        <input
          type="radio"
          value="young"
          onChange={(event) => setInputTwo(event.target.value)}
          checked={inputTwo === 'young'}
          name="age"
          id="age-range" />
      </label>

      <label htmlFor="age-range">
        20-60
        <input
          type="radio"
          value="mid-aged"
          onChange={(event) => setInputTwo(event.target.value)}
          checked={inputTwo === 'mid-aged'}
          name="age"
          id="age-range" />
      </label>
      {/*       <label htmlFor="age-range">
        20-60
        <input
          name="age"
          id="age-range"
          type="radio"
          checked={assignValue}
          value="mid-aged" />
      </label>

      <label htmlFor="age-range">
        60+
        <input
          name="age"
          id="age-range"
          type="radio"
          checked={assignValue}
          value="old" />
      </label> */}

      <p>Age: {inputTwo}</p>
    </>
  )
}

export default SecondQuestion;