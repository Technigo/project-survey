import React from 'react'
 
const SecondQuestion = (props) => {

  const onFavoriteTime = (e) => {
    props.setFavoriteTime (e.target.value)
    console.log(e.target.value)
  }
 
  return (
    <form className="form-two" onSubmit={(event) => event.preventDefault()}>
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
      </div>
    </form>  
  )
}

export default SecondQuestion

