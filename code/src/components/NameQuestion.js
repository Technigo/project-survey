import React from 'react';

const NameQuestion = ({ 
    nameInput, 
    handleNameInputChange,
    handleStepChange,
 }) => {
  return (
    <div className="container">
      <h1> My name is: </h1>
      <input
        type="text"
        value={nameInput}
        onChange={handleNameInputChange} />
    <button className="nextButton" onClick={handleStepChange}>Next</button> 
    </div>
    
  )
}

export default NameQuestion;