import React from 'react'



const FirstQuestion = (props) => {
const {nameInput, onNameInputChange, onStepChange} = props

  return (
    <form>
      <label htmlFor="nameInput">Type your name</label>
      <input 
        id="nameInput" 
        type="text" 
        value={nameInput} 
        onChange={onNameInputChange} 
      />
      <button onClick={onStepChange}>Next question</button>
    </form>
  )
}

export default FirstQuestion