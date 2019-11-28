import React from 'react'
import './summary.css'

export const Summary = (props) => {
  return (
    <section id={props.id} className="summary-section">
      <h2 className="summary-title">{props.title}</h2>
      <ul>
        <li>
          You want to play <span className="user-answer">{props.boardgame}</span> this time</li>
        <li>
          You want to play on <span className="user-answer">{props.weekday}</span>
        </li>
        <li>You would like to play <span className="user-answer">{props.howOften}</span> times a month</li>
      </ul>
      <img src={require('./drink.png')} alt="Image" />
    </section>
  )
}