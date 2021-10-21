import React from 'react'

//Asks about the mood of the user
export const SecondQuestion = ({
  moodInput,
  onMoodInputChange,
  onStepChange,
  onPrevQuestionChange,
}) => {
  return (
    <div className='step-container'>
      <h2 className='survey-text'>Find a game based on your profile</h2>
      <h3>What's your mood?</h3>
      <label className='radio-wrapper'>
        <h4>Chill</h4>
        <input
          className='radio-button'
          type='radio'
          value='Chill'
          onChange={onMoodInputChange}
          checked={moodInput === 'Chill'}
        />
        <span class='checkmark'></span>
      </label>

      <label className='radio-wrapper'>
        <h4>Hyped</h4>
        <input
          className='radio-button'
          type='radio'
          value='Hyped'
          onChange={onMoodInputChange}
          checked={moodInput === 'Hyped'}
        />
        <span class='checkmark'></span>
      </label>

      <label className='radio-wrapper'>
        <h4>Overthinking</h4>
        <input
          className='radio-button'
          type='radio'
          value='Overthinking'
          onChange={onMoodInputChange}
          checked={moodInput === 'Overthinking'}
        />
        <span class='checkmark'></span>
      </label>
      <div className='button-wrapper'>
        <button onClick={onPrevQuestionChange}>Previous question</button>
        <button className='next-question' onClick={onStepChange}>
          Next question
        </button>
      </div>
    </div>
  )
}
