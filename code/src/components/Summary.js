import React from 'react'

export const Summary = (props) => {

  //Function to reload page and start over - called in button onClick attribute
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="summary">
      <h2>Thank you {props.text}!</h2>
      <p className="user-answer">#1: {props.select}</p>
      <p className="correct-answer"> {props.select === ("Home" || "Vacayay!") ? "Correct!" : "Wrooong!"} Vacayay of course. Or home sweet home <span role="img" aria-label="house">🏡</span></p>
      <p className="user-answer">#2: {props.radioButton}</p>
      <p className="correct-answer">{props.radioButton === "Banana" ? "Correct!" : "Wrooong!"} Minions crave for <span role="img" aria-label="banana">🍌</span></p>
      <p className="user-answer">#3: {props.checkbox}</p>
      <p className="correct-answer">{props.checkbox === ("Yes" || "The slowest") ? "Correct!" : "Wrooong!"} Sloths are slow. The slowest.</p>
      <p className="user-answer">#4 : {props.range}</p>
      <p className="correct-answer">{props.range === (8 || 9) ? "Correct!" : "Wrooong!"} Depending on legend Santa has 8 or 9 <span role="img" aria-label="deer">🦌</span></p>
      <button className="restart" onClick={refreshPage}>Again?</button>
    </div>
  )
}