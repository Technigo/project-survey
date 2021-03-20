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
        id={checkBox['name']}
        type='checkbox'
        checked= {checkBoxGroup.includes(checkBox['name'])}
        onChange={() => oncheckBoxGroupToggle(checkBox['name'])}  
      />
      <label htmlFor={checkBox}>{checkBox['text']}</label>
    </div>
  )
}