import React from 'react'

const FirstQuestion = (props) => {
const {nameInput, onNameInputChange,emailInput, onEmailInputChange, onStepChange} = props

  return (
    <form className="form">
      <div className="inner-container">
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

        {(nameInput === '') && <p className="error">Please fill in your name</p>}
      </div>

      <div className="inner-container">
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
        
        {(emailInput === '') && <p className="error">Please fill in your e-mail</p>}
      </div>

      <button 
        disabled={nameInput === '' || emailInput === ''}
        onClick={() => onStepChange(1)}
        type="submit"
        className="form-button bouncy">
          Next question
      </button>
      
    </form>
  )
}

export default FirstQuestion