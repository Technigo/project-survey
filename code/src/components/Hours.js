import React from 'react'

const Hours = props => {

  const {hours, setHours} = props

  const onHoursChange = (e) => {
    setHours(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="survey-item hours">
      <p className="section-heading">How many hours do you code a day?</p>

      <input 
      id="0-1" 
      type="radio"
      value={hours}
      onChange={onHoursChange} 
      />
      <label htmlFor="0-1">0-1 hour</label>

      <input 
      id="1-3" 
      type="radio" 
      value={hours}
      onChange={onHoursChange} 
      />
      <label htmlFor="1-3">1-3 hours</label>

      <input 
      id="3-5" 
      type="radio"
      value={hours}
      onChange={onHoursChange}  
      />
      <label htmlFor="3-5">3-5 hours</label>

      <input 
      id="5+" 
      type="radio"
      value={hours}
      onChange={onHoursChange}  
      />
      <label htmlFor="5+">5+ hours</label>

    </div>
  )
}

export default Hours