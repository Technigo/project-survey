import React from 'react';

const Summary = ({ nameInput, ageInput, locationInput, greenInput, feedbackInput, submitBtn }) => {
  return (
    <div className="summary">
      <h2>Summary of your answers:</h2>
      <ul>
        <li><b>Name:</b><br />{nameInput}</li>
        <li><b>Age:</b><br />{ageInput}</li>
        <li><b>Location:</b><br />{locationInput}</li>
        <li><b>Grade for green area:</b><br />{greenInput}</li>
        <li><b>Like to have more of:</b><br />{feedbackInput}</li>
      </ul>
      <p className="submitAnswer">Click the button below to submit your answers.</p>
      <button title="Submit answers" type="submit" onClick={submitBtn}> Submit</button>
    </div>
  )
};

export default Summary;