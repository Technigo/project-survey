import React from 'react'

export const Summary = (props) => {  

  let changeClass = "form-wrapper"
  if (props.radioValue === "Winter") {
    // eslint-disable-next-line
    {changeClass = "form-wrapper ice"}
  }

  return (
    <div className="summary" tabindex="0">
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