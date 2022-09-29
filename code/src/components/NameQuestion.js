import React from 'react';

const NameQuestion = ({
  nameInput,
  handleNameInputChange,
  handleStepChange
}) => {
  return (
    <div className="container">
      <div className="question-container">
        <h2> Okay! Firstly I would like to get your name please. </h2>
        <input className="name-input"
          type="text"
          value={nameInput}
          onChange={handleNameInputChange} />
      </div>
      <button className="button" onClick={handleStepChange}>Next</button>

    </div>

  )
}

export default NameQuestion;