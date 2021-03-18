import React, { useState } from 'react'

import { Summary } from './Summary'
import { TextInput } from './TextInput'
import { RadioButton } from './RadioButton'
import { DropDown } from './DropDown'

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
          <TextInput onNameChange={onNameChange} />
          <RadioButton
            onRadioClicked={onRadioClicked}
            typeOfTrip={typeOfTrip}
            radioValue={radioValue}
          />
          <DropDown
            onDropDown={onDropDown}
            dropDown={dropDown}
          />        
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
  