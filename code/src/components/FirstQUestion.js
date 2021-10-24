import React from 'react'

const FirstQuestion = (props) => {
const {nameInput, onNameInputChange,emailInput, onEmailInputChange, onStepChange} = props

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
        htmlFor="emailInput" 
        className="form-label">
          Type your e-mail
      </label>
      <input 
        id="emailInput" 
        type="email" 
        value={emailInput} 
        onChange={onEmailInputChange} 
        className="form-element"
        placeholder="emailsson@email.com"
      />



      <button 
        disabled={nameInput === '' || emailInput === ''}
        onClick={() => onStepChange(1)}
        type="submit"
        className="form-button bouncy">
          Next question
      </button>

      {(nameInput === '' || emailInput === '') && 
      <p className="error">Please fill in {nameInput === '' && 'name'} {(nameInput === ''&&  emailInput === '') && 'and'} {emailInput === '' && 'e-mail'}</p>}
      
    </form>
  )
}

export default FirstQuestion