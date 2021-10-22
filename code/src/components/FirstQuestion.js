import React from 'react'

//Starting with input fields for users name
const FirstQuestion = ({ nameInput, onNameInputChange, surnameInput, onSurnameInputChange, onStepChange }) => {
  return (
    <form className="section">
      <h2>Please, type your name <span role="img" aria-label="smile">😃</span></h2>
      <label htmlFor="nameInput">Name </label>
          <input 
            id="nameInput" 
            type="text" 
            value={nameInput} 
            onChange={onNameInputChange} 
          />
      <label htmlFor="surnameInput">Surname </label>
          <input 
            id="surnameInput" 
            type="text" 
            value={surnameInput}
            onChange={onSurnameInputChange}
          />
        <button onClick = {onStepChange}>Next step please</button>
      </form>
    );   
};

export default FirstQuestion;