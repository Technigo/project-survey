import React from 'react';

const NameQuestion = ({ 
    nameInput, 
    handleNameInputChange,
    handleStepChange,
 }) => {
  return (
    <div className="container">
      <h2> Okay! Firstly I would like to get your name please. </h2>
      <input
        type="text"
        value={nameInput}
        onChange={handleNameInputChange} />
    <button className="nextButton" onClick={handleStepChange}>Next</button> 
    </div>
    
  )
}

export default NameQuestion;