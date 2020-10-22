import React from 'react';

import RadiobuttonCss from 'components/RadiobuttonCss.css'


const perWeek = ["0-2", "3-4", "5-7"];

export const Radiobutton = ({questionTimes, timesPerWeek, setTimesPerWeek}) => {

    return (
      <>
            <div className="sub-heading form-radio">
              <h2 tabindex="0">2. How often do you eat candy?</h2>
            </div>
            <p tabindex="0" className="times-per-week">Times per week:</p>
            <div className="label-container">
              {perWeek.map((times) => (
            
              <label htmlFor="" key={times}>
                  <input className="input"
                  type="radio"
                  value={times}
                  onChange={(event) => setTimesPerWeek(event.target.value)}
                  checked={timesPerWeek === times}
                  required
                  />
                  {times}
              </label>
              ))}
            </div> 
    </>
  );
};

