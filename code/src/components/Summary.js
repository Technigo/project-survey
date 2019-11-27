import React from 'react'

export const Summary = (props) => {

  //Function to reload page and start over - called in button onClick attribute
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="summary">
      <h2>Thank you {props.name}!</h2>
      <p className="user-answer">#1: {props.location}</p>
      <p className="correct-answer"> Vacayay of course! Or home sweet home 🏡</p>
      <p className="user-answer">#2: {props.fruit}</p>
      <p className="correct-answer">Minions crave for 🍌</p>
      <p className="user-answer">#3: {props.range}</p>
      <p className="correct-answer">Depending on legend Santa has 8 or 9 🦌</p>
      <button onClick={refreshPage}>Restart</button>
    </div>
  )
}