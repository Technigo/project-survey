
import React from 'react'
import "./app.css"
import "./summary.css"


export const Summary = (props) => {
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <div className="summary">
      <h3>Alright {props.name}! Heres your result:</h3>
      <p>You are {props.ageGroup === "0-20" ? "young." : "20-30" ? "still young." : "old.."} </p>
      <p>{props.readyness === "ready" ? "Great to see that you are postive to the new year!" : "I see that you are not ready for the new year... You will be fine! "}  </p>
      <p>In 2019 your favourite event was {props.yearEvent}... Interesting choice! </p>
      <p>You had {props.range} beers in 2019.. Impressive!</p>
      <p>{props.range} {props.happiness === "happy" ? "is a great amount of beers." : "beers.. Did you want more?"}</p>
      <p>You look forward to: {props.lookForward} </p>

      <button onClick={refreshPage}>Restart
      </button>

    </div>
  )
}
