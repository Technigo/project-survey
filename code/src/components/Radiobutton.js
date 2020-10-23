import React from 'react';

import 'components/RadiobuttonCss.css'


const perWeek = ["0-2", "3-4", "5-7"];

export const Radiobutton = ({questionTimes, daysPerWeek, setDaysPerWeek}) => {

  return (
    <>
      <div className="sub-heading form-radio">
        <h2 tabindex="0">2. How often do you eat candy?</h2>
      </div>
      <p tabindex="0" className="days-per-week">Days per week:</p>
      <div className="label-container">
        {perWeek.map((days) => (
          <label 
            htmlFor="days" 
            id="days"
            key={days}
            aria-label={days}>
            <input className="input"
              type="radio"
              value={days}
              onChange={(event) => setDaysPerWeek(event.target.value)}
              checked={daysPerWeek === days}
              />
              {days}
          </label>
        ))}
      </div> 
    </>
  );
};

