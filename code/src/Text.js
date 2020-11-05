import React from 'react'

export const Text = ({ onTextInput, textInput }) => {
  return <div className="question" tabIndex="0">
    <label for="text" tabIndex="0">"I feel the need for.."</label>
    <input type="text" id="text" name="text" value={textInput} onChange={e => { onTextInput(e.target.value) }} tabIndex="0" required minLength='2' />
  </div>
  }