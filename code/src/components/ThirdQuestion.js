import React from 'react'

export const ThirdQuestion = ({
  socialInput,
  onSocialInputChange,
  onStepChange,
  onPrevQuestionChange,
}) => {
  return (
    <div className='step-container'>
      <h2 className='survey-text'>Find a game based on your profile</h2>
      <h3>How are you socially?</h3>
      <select value={socialInput} onChange={onSocialInputChange}>
        <option disabled value=''>
          Select something
        </option>
        <option value='Forever alone'>Forever alone</option>
        <option value='Love to be in a group'>Love to be in a group</option>
        <option value='A few peeps is enough'>A few peeps is enough</option>
      </select>
      <div className='button-wrapper'>
        <button onClick={onPrevQuestionChange}>Previous question</button>
        <button className='next-question' onClick={onStepChange}>
          Next question
        </button>
      </div>
    </div>
  )
}
