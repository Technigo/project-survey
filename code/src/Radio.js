import React from 'react'

export const Radio = ({ handleRadioInput }) => {
  return <div className="question" tabIndex="0">
      <p tabIndex="0">Favourite callsign</p>
      <fieldset>
        <label for="mav" tabIndex="0">Maverick</label> 
        <input type="radio" value="Maverick" id="mav" onChange={e => handleRadioInput(e.target.value)}/>
        <label for="goose" tabIndex="0">Goose</label> 
        <input type="radio" value="Goose" id="goose" onChange={e => handleRadioInput(e.target.value)}/>
        <label for="sundown" tabIndex="0">Sundown</label> 
        <input type="radio" value="Sundown" id="sundown" onChange={e => handleRadioInput(e.target.value)}/>
        </fieldset>
  </div>
}