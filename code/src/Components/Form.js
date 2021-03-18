import React, { useState } from 'react'

import { Summary } from './Summary'
import { TextInput } from './TextInput'
import { RadioButton } from './RadioButton'
import { DropDown } from './DropDown'
import { TextWrapper } from './TextWrapper'
import { NextButton } from './NextButton'
import { SubmitButton } from './SubmitButton'

const typeOfTrip = ['Winter', 'Sun']

export const Form = () => {
  const [name, SetName] = useState('')
  const [radioValue, SetRadioValue] = useState('')
  const [dropDown, setDropDown] = useState('')  
  const [newCounter, setNewCounter] = useState(0);

  const onCounterIncrease = () => {
  setNewCounter(newCounter + 1);
  }
  
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
  
  return (
  <div className="wrapper">          
    <form className="form" onSubmit={event => event.preventDefault()}> 
      <div className="form-wrapper">        
            {newCounter === 0 && (
              <div>
                <TextWrapper />
                <NextButton
                onCounterIncrease={onCounterIncrease} />
              </div>
            )}
        <div className="questions-wrapper">   
            {newCounter === 1 && (
              <div>
                <TextInput onNameChange={onNameChange} />
                {name !== '' && ( <NextButton onCounterIncrease={onCounterIncrease} />)}
              </div>
            )}
            {newCounter === 2 && (
              <div>
                <RadioButton
                  onRadioClicked={onRadioClicked}
                  typeOfTrip={typeOfTrip}
                  radioValue={radioValue}
                />
                {radioValue !== '' && (<NextButton onCounterIncrease={onCounterIncrease} />)}
              </div>
            )}
            {newCounter === 3 && (
              <div>
                <DropDown
                  onDropDown={onDropDown}
                  dropDown={dropDown}
                />  
                {dropDown !== '' && (<SubmitButton onCounterIncrease={onCounterIncrease} />)}              
              </div>
            )}
            {newCounter === 4 && (
              <div>
                <Summary 
                  name={name}
                  radioValue={radioValue}
                  dropDown={dropDown}
                />
                <button onClick={() => {
                  setNewCounter(newCounter -4)
                  SetName('')
                  SetRadioValue('')
                  setDropDown('')  
                }}>
                  RESTART
                </button> 
              </div>
            )}      
        </div>      
      </div>
    </form>
  </div>
  )
}          
  