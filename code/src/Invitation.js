import React from "react"

export const Invitation = ({date, time, place}) => {
  return (
  <>
  <h2>Detaljer</h2>  
  <ul>
    <li>{date}</li>
    <li>{time}</li>
    <li>{place}</li>
  </ul>
  </>
  )
}
