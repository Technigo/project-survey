import React from 'react'

//Displays the users inputs as an overview
export const Overview = ({
  nameInput,
  moodInput,
  socialInput,
  viewInput,
  startOver,
}) => {
  return (
    <section className='step-container'>
      <progress
        className='progress-bar'
        id='survey'
        value='6'
        max='6'
      ></progress>
      <h2 className='survey-text'>Game Finder</h2>
      <button className='restart-button' onClick={startOver}>
        Start over
      </button>
      <h2>Based on your profile:</h2>
      <p>Name: {nameInput}</p>
      <p>Mood: {moodInput}</p>
      <p>Socially: {socialInput}</p>
      <p>View the world: {viewInput}</p>
    </section>
  )
}
