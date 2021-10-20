import React from 'react'

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {

  return (
    <form>
    <label htmlFor="nameInput">What's your full name?</label>
      <input 
      id="nameInput" 
      type="text" 
      value={nameInput} //state property
      onChange={onNameInputChange} //function to update the property
    />
     <button 
      disabled={nameInput === ''}
      onClick={onStepChange}>Submit</button>
     </form>
  )
}

export default FirstQuestion