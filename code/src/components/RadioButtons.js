import React, { useState } from 'react'

const timeInterval = [
  'Every day',
  'Every week',
  'Every month',
  'When beeing angry & sad'
]

const RadioButtons = () => {
  const [timeIntervals, setTimeIntervals] = useState()

return (
  <div className='button-box'>
    <p>How often do you crave the cream?</p> 

    <div>
      {timeInterval.map(intervals => (
        <label key={intervals}>
        <input type='radio'
        value={ intervals }
        onChange={(event) => setTimeIntervals(event.target.value)}
        checked={timeIntervals === intervals}
        />
        {intervals}
        </label>
        
      ))}
      
    </div>
  </div>
  
)
}

export default RadioButtons;