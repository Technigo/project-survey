import React, { useState } from 'react'

const timeIntervals = [
  'Every day',
  'Every week',
  'Every month',
  'When angry & sad'
]

const RadioButtons = () => {
  const [timeIntervals, setTimeIntervals] = useState()

return (
  <>
    {/* <p>How often do you crave the cream?</p> */}

    <div>
      {timeIntervals.map(intervals => (
        <label key={intervals}>
        <input type='radio'
        value={ intervals }
        onChange={(event) => setTimeIntervals(event.target.value)}
        checked={timeIntervals === intervals}
        />
        {intervals}
        </label>
        // <label>Every week</label>
        // <input type='radio'/>
        // <label>Every month</label>
        // <input type='radio'/>
        // <label>When angry &#38; sad</label>
        // <input type='radio'/>

      ))}
      
    </div>
  </>
)
}

export default RadioButtons;