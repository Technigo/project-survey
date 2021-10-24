import React from 'react'

const Feels = ( {setFeels} ) => {
  
  const hourArray = ['nothing', 'alright', 'great', 'super']

  return (
  <>
  
    <div className="survey-item-feels">
    <p className="section-heading">How do you feel when drinking coffee ☕️?</p>
      {hourArray.map(choice => (
      <label className="feels" key={choice}>
      <input
        type="radio"
        value={choice}
        name="feels"
        onChange={(e) => {setFeels(e.target.value)}}
      />
      {choice}
      </label>  
    ))}
    </div>
    </>
  )
      }

      export default Feels