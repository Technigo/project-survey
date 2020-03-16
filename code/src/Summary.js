import React from "react"
import { Form } from './Form'


export const Summary = (props) => {
  
  return (
    <section className="summary-style">
      <h1>Thank you for your answer!</h1>
      <h1 className="finalMessage">Your city: {props.city} </h1>
      <h1 className="finalMessage">Your favourite cuisine: {props.cuisine}</h1>
      <h1 className="finalMessage"> Visits / month: {props.visits} </h1>
    </section>
  )
}