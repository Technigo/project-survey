/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line no-unused-vars, max-len
const QuestionTwo = ({ questionTwo, setQuestionTwo, workAlternative, setWorkAlternative, onStepChange, onInputChange }) => {
  return (
    <div tabIndex="0" className="container">
      <h1 className="homeText"> Icebreaker meeting environment survey</h1>
      <form className="form-container">
        <p tabIndex="0" className="question"> Which place you would choose to work?</p>
        <p tabIndex="0" className="text"> (Answer as if you were 100 years old and it was your last day on the planet?) </p>
        <select
          tabIndex="0"
          className="inputBox"
          onChange={(event) => setWorkAlternative(event.target.value)}
          value={workAlternative}>
          <option value="">Select your alternative:</option>
          <option value="Edge of rooftop">Edge of rooftop</option>
          <option value="On a snow-capped hill">On a snow-capped hill</option>
          <option value="Sitting on the moon">Sitting on the moon</option>
          <option value="On a railloard bridge">On a railloard bridge</option>
          <option value="On the beach">On the beach</option>
          <option value="Walking over colleagues">Walking over colleagues</option>
          <option value="Pretending to be a ninja and typing like one too">Pretending to be a ninja and typing like one too</option>
        </select>
      </form>
      <p tabIndex="0" className="text">Not your favorite? Ok! Somewhere else?</p>
      <input className="inputBox" type="text" value={questionTwo} onChange={onInputChange} />
      <button className="lastButton" type="submit" onClick={onStepChange}>Next</button>
    </div>
  )
}

export default QuestionTwo;