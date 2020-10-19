import React from "react"
import "./summary.css"

export const Summary = ({reflection}) => { // {reflection} could also be replaced with props (without curly) but then you should write {props.reflection} instead.
  return (
    <section>
      <h1>Today was {reflection} for you. </h1>
    </section>
  )
}
