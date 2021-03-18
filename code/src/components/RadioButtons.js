import React from 'react'

const timeIntervals = [
  'Every day',
  'Every week',
  'Every month',
  'When beeing angry & sad'
]

const RadioButtons = ({timeInterval, setTimeInterval}) => {
  

return (
  <div className='button-container'>
    <p className='p-button-box'>How often do you crave the cream?</p> 

    <div className='button-small-box'>
      {timeIntervals.map(interval => (
        <label key={interval} className='button-box'>
        <input type='radio'
        value={ interval }
        onChange={(event) => setTimeInterval(event.target.value)}
        checked={timeInterval === interval}
        />
        <span className='checkmark'></span>
        {interval}
        </label>
        
      ))}
      
    </div>
  </div>
  
)
}

export default RadioButtons;