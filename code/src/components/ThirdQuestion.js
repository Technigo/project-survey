import React from 'react'

const ThirdQuestion = ({
	hearAboutInput,
	onHearAboutInputChange,
	onStepChange,
}) => {
  return (
    <form>
      <label>
        <p>3 -&gt; How did you hear about us?</p>
        <input
          type="radio"
          value="searchengine"
          onChange={() => onHearAboutInputChange('Search engine')}
        />
        <span>Search engine (Google, Yahoo, etc.)</span>
      </label>

      <label>
        <input
          type="radio"
          value="socialmedia"
          onChange={() => onHearAboutInputChange('Social media')}
        />
        <span>Social media</span>
      </label>

      <label>
        <input
          type="radio"
          value="friend"
          onChange={() => onHearAboutInputChange('Recommended by a friend or colleague')}
        />
         <span>Recommended by friend or colleague</span>
      </label>

      <label>
        <input
          type="radio"
          value="other"
          onChange={() => onHearAboutInputChange('Other')}
        />
         <span>Other</span>
      </label>
      <button onClick={onStepChange}>Continue</button>
     </form>
  )
}

export default ThirdQuestion;