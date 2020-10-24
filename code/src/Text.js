import React from 'react'

export const Text = ({ handleTextInput, textInput }) => {
  return <div className="question" tabIndex="0">
    <label for="text" tabIndex="0">"I feel the need for.."</label>
    <input type="text" id="text" name="text" value={textInput} onChange={e => { handleTextInput(e.target.value) }} tabIndex="0"/>
  </div>
  }