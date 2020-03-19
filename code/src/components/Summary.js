import React from "react"



export const Summary = (props) => {
  const { song, name, type } = props
  return (
    <div className="survey-summary">

      <h3 className="">When you wash your hands you sing {props.song}</h3>
      <h3>you use {props.name} </h3>
      <h3>in {props.type} form.</h3>
    </div>

  )
}