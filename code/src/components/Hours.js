import React from 'react'

const Hours = (props) => {
  
  const hourArray = ['0-1', '1-3', '3-5', '5+']
  
  const [setHours] = [props.setHours]

  return (
  <>
    <div className="survey-item">
    <p className="section-heading">How many hours do you code a day?</p>
      {hourArray.map(choice => (
      <label className="hours" key={choice}>
      <input
        type="radio"
        value={choice}
        name="hours"
        onChange={(e) => {setHours(e.target.value)}}
      />
      {choice}
      </label>  
    ))}
    </div>
    </>
  )
      }

      export default Hours



