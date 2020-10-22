import React, { useState } from 'react';
import { FinalText } from './FinalText';

export const ThirdQuestion = (props) => {
  const [dayOption, setDayOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if (dayOption) {
      setVisible(true);
    }
  };

  const onDayChange = (newDay) => {
    setDayOption(newDay);
  };

  return (
    <>
      <form className="third-question" onSubmit={(event) => event.preventDefault()}>
        <img className="first-question-img" src="assets/question3-img.png" alt="Traveler with a map" />
        <div className="day-select-text">
          <label htmlFor="daytime">Favorite time of the Day:
            <select
              id="daytime"
              onChange={(event) => onDayChange(event.target.value)}
              value={dayOption}
              required>
              <option value="">Pick a time</option>
              <option value="sunrise">Sunrise</option>
              <option value="afternoon">Afternoon</option>
              <option value="sunset">Sunset</option>
              <option value="evening">Evening</option>
            </select>
          </label>
          <button
            type="submit"
            className="last-button"
            onClick={checkInput}
            aria-label="Enter and Tab to reveal your dream vacation">
            <a href="#final-text" aria-hidden="true" tabIndex="-1">Dream away!</a>
          </button>
        </div>
      </form>
      {(visible === true) && (
        <FinalText
          resultDestination={props.finalDestination}
          resultNumber={props.chosenNumber}
          resultDay={dayOption} />
      )}
    </>
  );
};

/* The replies entered by the user are being passed from one question to the other by using props.
So when one question is answered, the reply is being sent to the next question as a prop and so
on, until all values are passed on to the FinalText component, where I can use them for the
summary text */