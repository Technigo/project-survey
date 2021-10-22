import React from 'react'

const SecondQuestion = (props) => {
  const {surnameInput, onSurnameInputChange, onStepChange} = props

  return (
      <form className="form">
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
        />

        <div className="button-container">
          <button onClick={() => onStepChange("back")} className="form-button">Go back</button>
          <button 
            disabled={surnameInput === ''}
            onClick={() => onStepChange("next")}
            className="form-button">
              Next question
          </button>
        </div>
        
      </form>
  )
}

export default SecondQuestion