import React from 'react';

const UserInput = ({ userInput, setUserInput, headerText, subHeaderText }) => {
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value)
  }
  return (
    <div className="input-field">
      <h2 className="sub-header">{headerText}</h2>
      <h3 className="question-title">{subHeaderText}</h3>
      <input
        className="input-box"
        placeholder="Type here"
        value={userInput}
        type="text"
        onChange={handleUserInputChange}
        required="required"
      />
    </div>
  )
}

export default UserInput