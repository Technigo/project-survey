import React from 'react'

const ThirdQuestion = ({
	ageInput,
	onAgeInputChange,
	onStepChange,
}) => {
  return (
    <form>
      <label>
        <p>How did you hear about us?</p>
        <input
          type="radio"
          value="searchengine"
          onChange={() => onAgeInputChange('')}
        />
        <span>Search engine (Google, Yahoo, etc.)</span>
      </label>

      <label>
        <input
          type="radio"
          value="socialmedia"
          onChange={() => onAgeInputChange('')}
        />
        <span>Social media</span>
      </label>

      <label>
        <input
          type="radio"
          value="friend"
          onChange={() => onAgeInputChange('')}
        />
         <span>Recommended by friend or colleague</span>
      </label>

      <label>
        <input
          type="radio"
          value="other"
          onChange={() => onAgeInputChange('')}
        />
         <span>Other</span>
      </label>
     </form>
  )
}

export default ThirdQuestion;