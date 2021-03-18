import React, { useState } from 'react'

import { Summary } from './Summary'
import { TextInput } from './TextInput'
import { RadioButton } from './RadioButton'
import { DropDown } from './DropDown'
import { TextWrapper } from './TextWrapper'

const typeOfTrip = ['Winter', 'Sun']

export const Form = () => {
  const [name, SetName] = useState('')
  const [radioValue, SetRadioValue] = useState('')
  const [dropDown, setDropDown] = useState('')
  const [summary,setSummary] = useState(false)

  
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
          return false          
        }       
    return true
  }   

  return (
  <div className="wrapper">
    <form className="form" onSubmit={event => event.preventDefault()}>       
      {summary && (        
        <Summary 
          name={name}
          radioValue={radioValue}
          dropDown={dropDown}
        /> )}
          
        {!summary && (
        <div className="form-wrapper">  
          <TextWrapper />
          <div className="questions-wrapper">            
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
          </div>      
        </div>
        )}

      <button className="submit-button" onClick={()=> {
        setSummary(isSurveyComplete())
        console.log(isSurveyComplete())
        console.log({summary})        
      }}>Submit!        
      </button>
      </form>
  </div>)
}          
  