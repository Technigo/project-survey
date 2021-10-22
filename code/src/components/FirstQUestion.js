import React from 'react'

const FirstQuestion = (props) => {
const {nameInput, onNameInputChange,surnameInput, onSurnameInputChange, onStepChange} = props

  return (
    <form className="form">
      <label 
        htmlFor="nameInput" 
        className="form-label">
          Type your name
      </label>
      <input 
        id="nameInput" 
        type="text" 
        value={nameInput} 
        onChange={onNameInputChange} 
        className="form-element"
        placeholder="Name"
      />

      <label 
        htmlFor="surnameInput" 
        className="form-label">
          Type your surname
      </label>
      <input 
        id="surnameInput" 
        type="text" 
        value={surnameInput} 
        onChange={onSurnameInputChange} 
        className="form-element"
        placeholder="Surname"
      />

      <button 
        disabled={nameInput === '' || surnameInput === ''}
        onClick={onStepChange}
        className="form-button">
          Next question
      </button>
    </form>
  )
}

export default FirstQuestion