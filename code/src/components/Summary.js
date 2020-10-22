import React from "react"
import "./summary.css"

export const Summary = ({reflection, weather}) => { // {reflection} could also be replaced with props (without curly) but then you should write {props.reflection} instead.
  return (
    <section className="summary-section">
      <h1 className="summary-heading">Notes of the day</h1>
        <p>Today was {reflection} for you. 
        Maybe the {weather} weather had an impact on your mood. Hope tomorrow is even better!
        </p>
          <button><a href="">Create new notes</a></button>
    </section>
  )
}
