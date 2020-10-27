import React, { useState } from 'react';
import "css components/questionrange.css";

export const Questionrange = ({coffeeprice, onRangeChange}) => {
  const [ output, setOutput ] = useState("")
  return (
    <>
      <div className="rangeslider">
        <label tabIndex='0' for="range" htmlFor="answerrange">How much do you think a decent cup of coffee should cost?</label>
          <input type="range"
              id="range"
              className="slider"
              onChange = {event => {
                onRangeChange(event.target.value)
                setOutput(event.target.value)
              }}
              min="2" max="6" 
              value={coffeeprice}
              aria-label="Choose a price that you consider fair for a cup of coffee from the range of 2 to 6"
          />
            <p>{output} $</p>
      </div>
    </>
  )
}

