
import React from 'react'
import "./app.css"

export const Summary = (props) => {
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <div className="summary">
      <h3>Heres your result:</h3>
      <p>Your are {props.happiness === "happy" ? "super happy!" : "Sad :("}</p>
      <p>how are you? {props.feeling}</p>
      <p>Your name:{props.name}</p>
      <p>You impression: {props.impression} </p>
      <p>You live: {props.location}  </p>
      <p>Ready for 2019?: {props.readyness === "ready" ? "YES! Bring it on!" : "Hell no!"}  </p>

      <p>You are {props.ageGroup === "0-18" ? "young" : "19-30" ? "still young" : "not so young"} </p>

      <button onClick={refreshPage}>Restart</button>

    </div>
  )
}
