import React from 'react';

const SelectQuestion = ({
  selectInput,
  handleSelectInputChange,
  handleStepChange
}) => {
  return (
    <div className="container">
      <div className="question-container">
        <h2>Where are you now?</h2>

        <select
          className="select"
          id="selectInput"
          value={selectInput}
          onChange={handleSelectInputChange}>
          <option value="">Select location:</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Vaasa">Vaasa</option>
        </select>
      </div>
      <div className="button-container">
        <button className="button" onClick={handleStepChange}> Next</button>
      </div>
    </div>
  );
};

export default SelectQuestion;

/* const SelectQuestion = (
    selectInput,
    handleSelectInputChange,
    handleStepChange,
) => {
  return (
    <div>
      <select
        value={selectInput}
        onChange={handleSelectInputChange} >

        <option value="">Select location:</option>
        <option value="">Stockholm</option>
        <option value="">Lisbon</option>
        <option value="">Vaasa</option>
      </select>
      <button className="nextButton" onClick={handleStepChange}>Next</button>
    </div>
  )
}

export default SelectQuestion;

*/