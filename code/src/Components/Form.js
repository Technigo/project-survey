/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [radio, setRadio] = useState('');

  const [surveyComplete, setSurveyComplete] = useState(false);

  // radio button array
  const musicRate = ['I hate music', 'Rarely listens', 'Listen sometimes', 'Listen often', 'I cant live without music'];

  const isSurveyComplete = () => {
    if (name !== '' && dropdown !== '' && radio !== '') {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSurveyComplete()) {
      setSurveyComplete(true);
    } else {
      alert('Please fill out all the fields');
    }
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onDropdownChange = (event) => {
    setDropdown(event.target.value);
  };
  const onRadioChange = (event) => {
    setRadio(event.target.value);
  };

  if (surveyComplete) {
    return (
      <div className="summary">
        <h3>Summary:</h3>
        <p>Hours: {name}</p>
        <p>Where: {dropdown}</p>
        <p>Feeling: {radio}</p>
      </div>
    );
  } else {
    return (
      <>
        <header className="header">
          <h1 className="header-name">
            Music Survey
          </h1>
        </header>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="container-input-fields">
            <div className="name-label">
              <div>
                Amount of hours listening to music monthly:

                <input
                  className="name-input"
                  id="name"
                  type="number"
                  value={name}
                  onChange={onNameChange} />
              </div>
            </div>

            <div>
              <div className="musicDropdown" type="dropdown">

                Where do you prefer to listen to music:
                <select value={dropdown} onChange={onDropdownChange}>
                  <option>Home</option>
                  <option>Live</option>
                  <option>Workout</option>
                  <option>Party</option>
                  <option>In the car</option>
                </select>
              </div>
            </div>
          </div>

          <h3 className="question-radio" alt="radio-button">
            How important is music to you:
          </h3>
          <div className="first-radio">
            {musicRate.map((rate) => (
              <label key={rate} htmlFor={rate} className="label-container">
                <input
                  id={rate}
                  name="rate"
                  type="radio"
                  value={rate}
                  required
                  onChange={onRadioChange}
                  checked={radio === rate} />
                {rate}
              </label>
            ))}
          </div>

          <button
            className="submit-button">SUBMIT
          </button>

        </form>
      </>
    );
  }
};
export default Form;
