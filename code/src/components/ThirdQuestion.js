import React, { useState } from 'react';
import { FinalText } from './FinalText';

export const ThirdQuestion = (props) => {
  const [dayOption, setDayOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if(dayOption) {
      return () => setVisible(true);
    }
  };

  return (
    <>
      <form className="third-question" onSubmit={(event) => event.preventDefault()}>
        <img className="first-question-img" src="assets/question3-img.png" alt="Traveler with a map"/> 
        <div className="day-select-text">
          <label htmlFor="daytime">Favorite time of the Day:</label>
            <select
            id="daytime"
            onChange={(event) => setDayOption(event.target.value)}
            value={dayOption} 
            required>
                <option value="">Pick a time</option>
                <option value="Sunrise">Sunrise</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Sunset">Sunset</option>
                <option value="Evening">Evening</option>
            </select>
          <button className="last-button" onClick={checkInput()}><a href="#final-text" aria-hidden="true" tabIndex="-1">Dream away!</a></button>
        </div>       
      </form>
      {(visible === true) && <FinalText resultDestination={props.finalDestination} resultNumber={props.chosenNumber} resultDay={dayOption}/>}
    </>
  );
};