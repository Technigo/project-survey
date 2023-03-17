import React from 'react';
import NextButton from 'components/Buttons/NextButton';
import PreviousButton from 'components/Buttons/PreviousButton';

const NameInput = ({ counter, setCounter, name, setName }) => {
  return (
    <div className="surveyWrapper">
      <p>First, what is your name?</p>
      <input
        type="text"
        placeholder="Your name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <div className="buttonContainer">
        <NextButton counter={counter} setCounter={setCounter} />
        <PreviousButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default NameInput;