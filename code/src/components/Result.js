import React from "react"

export const Result = (props) => {
  return (
    <div className="form-result">

      <h3 className="textResult">Okey, {props.name}!</h3> 
      <h3>You'd like to go to {props.whichPlanet}</h3>
      <h3>with {props.bringWith}!</h3>

      <h4>Safe travels, my friend!</h4>
      
    </div>
  )
}