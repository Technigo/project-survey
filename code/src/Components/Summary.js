import React from 'react'

export const Summary = (props) => {  
// This function decides if the summary text should have the form of a ice block regarding the choice of type of trip(radiobtn) 
  let changeClass = "form-wrapper"
  if (props.radioValue === "Winter") {
    // eslint-disable-next-line
    {changeClass = "form-wrapper ice"}
  }

  return (
    <div className="summary" tabindex="0">
      {/* This decides if the sun should be displayed or not in summary regarding to choice of typ of trip (radioBtn) */}
      {props.radioValue === "Sun" && (<div className="sun"></div>)}
      <div className={changeClass}>
        <p>Hi {props.name}!</p>
        <p>So you´re more into {props.radioValue} trips, that´s nice!</p>
        <p>Yeah, {props.dropDown} is a sweet transportation</p>
        <h3>Thank you!</h3>
      </div>
    </div>
  )
}