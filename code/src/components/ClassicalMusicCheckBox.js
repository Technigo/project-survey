import React from 'react'

export const ClassicalMusicCheckBox = ( {checkBoxGroup, setCheckBoxGroup, checkBoxes} ) => {
  const oncheckBoxGroupToggle = (checkBoxValue) => {
    if (checkBoxGroup.includes(checkBoxValue)) {
      setCheckBoxGroup(checkBoxGroup.filter(item => item !== checkBoxValue))
    } else { 
      setCheckBoxGroup([checkBoxValue, ...checkBoxGroup]) 
    }
  }
  return (

    <div className='question-wrapper'>
      <h3>When or for what purpose do you enjoy listening classical music?</h3>
      {checkBoxes.map((checkBox) => {
        return (
          <div key={checkBox['name']}>
            <input  
              id={checkBox['name']}
              type='checkbox'
              checked= {checkBoxGroup.includes(checkBox['name'])}
              onChange={() => oncheckBoxGroupToggle(checkBox['name'])}  
            />
            <label htmlFor={checkBox}>{checkBox['text']}</label>
          </div>
        )
      })} 
    </div>
  )
}