import React, { useState } from 'react'

import { Summary } from './Summary'

const typeOfTrip = ['Winter', 'Sun']

export const Form = () => {
  const [name, SetName] = useState('')
  const [radioValue, SetRadioValue] = useState()
  const [dropDown, setDropDown] = useState('')
  const [formquestions,setFormquestions] = useState(true)

  
  const onNameChange = (event) => {
    console.log(event.target.value)
    SetName(event.target.value)
  }
  const onRadioClicked = (event) => {
    console.log(event.target.value)
    SetRadioValue(event.target.value)
  }
  const onDropDown = (event) => {
    console.log(event.target.value)
    setDropDown(event.target.value)
  }
  
  const isSurveyComplete = () => {
    if (name === '' ||
        radioValue === '' ||
        dropDown === '') {
          return true
        }       
    return false
  } 
  

  return (
  <div className="wrapper">
    <form className="form" onSubmit={event => event.preventDefault()}>  
      
      {!formquestions && (
        <Summary 
          name={name}
          radioValue={radioValue}
          dropDown={dropDown}
        /> )}
          
        {formquestions && (
        <>               
          <div className="text-input">
            <label htmlFor="name-input">What´s your name: </label>
            <input 
              id="name-input"
              type="text"
              value={name}
              onChange={onNameChange}
              />
              </div> 

              <div className="radiobtn">
              <p>What type of trip you prefer:</p> 
              {typeOfTrip.map(trip => ( 
                <label key={trip}>
                  <input
                  name="radio"
                  type="radio"
                  value={trip}
                  onChange={onRadioClicked}
                  checked={radioValue===trip}
                  />
                  {trip}
                  </label>
              ))}    
          </div>

          <div className="dropdown">
            <label htmlFor="dropdown">What´s your favorite transportation: </label>
            <select 
              id="dropdown"
              value={dropDown}
              onChange={onDropDown}  
            >
            <option disabled></option>  
            <option>Plane</option>
            <option>Train</option>
            <option>Boat</option> 
            <option>Car</option> 
            </select>  

          </div>  
        </>
        )}

      <button className="submit-button" onClick={()=> {
        setFormquestions(isSurveyComplete())
        console.log(isSurveyComplete())
        console.log({formquestions})
      }}      
      >Submit!</button>
    </form>
  </div>)
}          
  