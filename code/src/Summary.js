
import React from 'react'
import "./app.css"

export const Summary = (props) => {
  // Funtion to reload page ans start over - called in button onClick
  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="summary">
      <h2>Thank you for your answers {props.name}!</h2>
      <p>Your impression: {props.impression}</p>
      <p>You location: {props.location}</p>
      <p>Your age: {props.ageGroup}</p>

      <button onClick={refreshPage}>Restart</button>
    </div>
  )
}
