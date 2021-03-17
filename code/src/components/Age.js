import React from 'react'



export const AgeRadioOption = ({ageGroupSpan, setAgeGroup}) => {
  const onAgeSelect = (event) => {
    setAgeGroup(event.target.value)
  
  }

  return (
  <>
      <label htmlFor={ageGroupSpan}>{ageGroupSpan}</label>
      <input
      name="age"
      id={ageGroupSpan}
      value={ageGroupSpan}
      type="radio"
      onChange={(event) => {onAgeSelect(event)
      }}
    />
   
    
  </>
  )
}







      