import React from 'react'

export const Radio = ({ onRadioInput }) => {
  return <div className="question" tabIndex="0">
      <fieldset>
        <legend tabIndex="0">Which character has the best callsign?</legend>
        <label for="mav" tabIndex="0">Maverick</label> 
        <input type="radio" value="Maverick" id="mav" onChange={e => onRadioInput(e.target.value)} name="wingman" />
        <label for="goose" tabIndex="0">Goose</label> 
        <input type="radio" value="Goose" id="goose" onChange={e => onRadioInput(e.target.value)} name="wingman" />
        <label for="sundown" tabIndex="0">Sundown</label> 
        <input type="radio" value="Sundown" id="sundown" onChange={e => onRadioInput(e.target.value)} name="wingman" />
        </fieldset>
  </div>
}