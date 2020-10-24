import React from 'react'

export const Radio = ({ handleRadioInput }) => {
  return <div className="question" tabIndex="0">
      <p tabIndex="0">Favourite callsign</p>
      <div>
        <label for="mav" tabIndex="0">Maverick</label> 
        <input type="radio" value="Maverick" name="callsign" id="mav" onChange={e => handleRadioInput(e.target.value)}/>
        <label for="goose" tabIndex="0">Goose</label> 
        <input type="radio" value="Goose" name="callsign" id="goose" onChange={e => handleRadioInput(e.target.value)}/>
        <label for="sundown" tabIndex="0">Sundown</label> 
        <input type="radio" value="Sundown" name="callsign" id="sundown" onChange={e => handleRadioInput(e.target.value)}/>
      </div>
  </div>
}