import React from 'react'

export const ClassicalMusicCheckBox = ( {checkBox, checkBoxGroup, setCheckBoxGroup} ) => {
  const oncheckBoxGroupToggle = (checkBoxValue) => {
    if (checkBoxGroup.includes(checkBoxValue)) {
      setCheckBoxGroup(checkBoxGroup.filter(item => item !== checkBoxValue))
    } else { 
      setCheckBoxGroup([checkBoxValue, ...checkBoxGroup]) 
    }
  }
  return (
    <div>
      <input 
        id={checkBox}
        type='checkbox'
        checked= {checkBoxGroup.includes(checkBox)}
        onChange={() => oncheckBoxGroupToggle(checkBox)}  
      />
      <label htmlFor={checkBox}>{checkBox}</label>
    </div>
  )
}