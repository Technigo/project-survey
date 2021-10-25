import React from 'react'
import '../index.css'

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {

  return (
    <form>
      <label htmlFor="nameInput">1 -&gt; What's your full name?</label>
      <input 
      id="nameInput" 
      type="text" 
      value={nameInput} //state property
      onChange={onNameInputChange} //function to update the property
    />
     <button 
      disabled={nameInput === ''}
      onClick={onStepChange}>Continue</button>
     </form>
  )
}

export default FirstQuestion