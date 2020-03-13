import React from "react"

export const Result = (props) => {
  return (
    <div className="form-result">
      <h3>
        Thank you!
        Okey, {props.name}!
        You'd like to go to: {props.whichPlanet}
        with: {props.bringWith}!
        Safe travels, my friend!
      </h3>
    </div>
  )
}