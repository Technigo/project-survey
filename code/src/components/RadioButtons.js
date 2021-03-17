import React, { useState } from 'react'

const timeIntervals = [
  'Every day',
  'Every week',
  'Every month',
  'When beeing angry & sad'
]

const RadioButtons = ({timeInterval, setTimeInterval}) => {
  

return (
  <div className='button-box'>
    <p>How often do you crave the cream?</p> 

    <div>
      {timeIntervals.map(interval => (
        <label key={interval}>
        <input type='radio'
        value={ interval }
        onChange={(event) => setTimeInterval(event.target.value)}
        checked={timeInterval === interval}
        />
        {interval}
        </label>
        
      ))}
      
    </div>
  </div>
  
)
}

export default RadioButtons;