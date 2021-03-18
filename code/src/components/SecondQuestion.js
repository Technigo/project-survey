import React from 'react'

import NextButton from 'components/NextButton'
 
const SecondQuestion = (props) => {

  const onFavoriteTime = (e) => {
    props.setFavoriteTime (e.target.value)
  }
 
  return (
    <div  className="question-container">
      <h1>Your favorite time to read?</h1>
      <div className="custom-select">
        <select
        onChange={onFavoriteTime}
        value= {props.favoriteTime} 
        required
        >
          <option value="">Select a time</option>
          <option value="morning">Morning</option>
          <option value="lunch">Lunch time</option>
          <option value="evening">Evening</option>
          <option value="vacation">Vacation</option>
        </select>
        <NextButton />
      </div>
    </div>  
  )
}

export default SecondQuestion

