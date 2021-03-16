import React, { useState } from 'react'


export const RadioButton = () => {
  const [radioValue, SetRadioValue] = useState('')

  const onRadioClicked = (event) => {
    console.log(event.target.value)
    SetRadioValue(event.target.value)
  }


  return (
  <div>
    <p>Radiobutton question</p>
    <label htmlFor="opt1">Option 1</label>
    <input id="opt1" name="opt1" type="radio" value={radioValue} onClick={onRadioClicked} required/>
    <label htmlFor="opt2">Option 2</label>
    <input id="opt2" name="opt2" type="radio" value={radioValue} onClick={onRadioClicked} required/>
    <label htmlFor="opt1">Option 3</label>
    <input id="opt3" name="opt3" type="radio"  value={radioValue} onClick={onRadioClicked} required/>
  </div>
  )
}