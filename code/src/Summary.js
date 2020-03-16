import React from "react"
import { Form } from './Form'


export const Summary = (props) => {
  //const { city } = props
  return (
    <section>
      <h1>Your city: {props.city} </h1>
      <h1>Your favourite cuisine: {props.cuisine}</h1>
      <h1> Visits / month: {props.visits} </h1>
    </section>
  )
}