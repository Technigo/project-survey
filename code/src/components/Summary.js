import React from 'react'

export const Summary = (props) => {

  //Funtion to reload page and start over - called in button onClick
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="summary">
      <h2>&#x2605; Thank you {props.name} &#x2605;</h2>
      <p>#1: {props.location}</p>
      <p>#2: {props.fruit}</p>
      <p>#3: {props.range}%</p>
      <button onClick={refreshPage}>Restart</button>
    </div>
  )
}