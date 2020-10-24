import React from 'react'

export const Text = ({ handleTextInput, textInput }) => {
  return <div className="question">
    <label for="text">"I feel the need for.."</label>
    <input type="text" id="text" name="text" value={textInput} onChange={e => { handleTextInput(e.target.value) }} />
  </div>
  }