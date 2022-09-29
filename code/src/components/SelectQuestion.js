import React from 'react';

const SelectQuestion = ({
  selectInput,
  handleSelectInputChange,
  handleStepChange
}) => {
  return (
    <div className="container">
      <div className="question-container">
        <h2>Lastly, what is your favourite colour?</h2>
        <div className="select-container">
          <select
            className="select"
            id="selectInput"
            value={selectInput}
            onChange={handleSelectInputChange}>
            <option value="">My favourite colour is:</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
		      <option value="Yellow">Yellow</option>
		      <option value="Green">Green</option>
            <option value="Blue">Blue</option>
		      <option value="Indigo">Indigo</option>
		      <option value="Violet">Violet</option>
            <option value="Purple">Purple</option>
		      <option value="Pink">Pink</option>
		      <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
		      <option value="Beige">Beige</option>
		      <option value="Brown">Brown</option>
		      <option value="Grey">Grey</option>
            <option value="Black">Black</option>
		      <option value="White">White</option>
          </select>
        </div>
      </div>
      <div className="button-container">
        <button className="button" onClick={handleStepChange}>Next</button>
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