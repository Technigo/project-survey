
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
      <p>Your name:{props.name}</p>
      <p>You impression: {props.impression} </p>
      <p>You live: {props.location}  </p>
      <p>You are {props.ageGroup === "0-18" ? "young" : "19-30" ? "still young" : "not so young"} </p>

      <button onClick={refreshPage}>Restart</button>

    </div>
  )
}


// export const Summary = (props) => {
//   // Funtion to reload page ans start over - called in button onClick
//   const refreshPage = () => {
//     window.location.reload();
//   }

//   return (
//     <div className="summary">
//       <h2>Thank you for your answers {props.name}!</h2>
//       <p>Your impression: {props.impression}</p>
//       <p>You location: {props.location}</p>
//       <p>Your age: {props.ageGroup}</p>

//       <button onClick={refreshPage}>Restart</button>
//     </div>
//   )
// }