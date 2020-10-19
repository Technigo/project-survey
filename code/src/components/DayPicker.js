import React, { useState } from "react";
import { FinalText } from "./FinalText";

export const DayPicker = (props) => {
  const [dayOption, setDayOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if(dayOption) {
      return () => setVisible(true)
    }
  };

  return (
    <section className="first-question">
      <form onSubmit={(event) => event.preventDefault()} className="first-question">
          <div className="day-picker">
              <label htmlFor="weekdays">Pick a day of the week:</label>
                  <select
                  id="weekdays"
                  onChange={(event) => setDayOption(event.target.value)}
                  value={dayOption} 
                  required>
                      <option value="">Select a day:</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                  </select>
                  <button onClick={checkInput()}><a href="#final-text">Show me the result!</a></button>
          </div>

          {(visible === true) && <FinalText resultColor={props.finalColor} resultNumber={props.chosenNumber} resultDay={dayOption}/>}
          
      </form>
    </section>
  );
};