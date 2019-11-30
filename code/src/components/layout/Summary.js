import React from 'react'
import './summary.css'

export const Summary = (props) => {
  return (
    <section id={props.id} className="summary-section">
      {props.children}
      <h2 className="summary-title">{props.title}</h2>
      <ul>
        <li>
          You want to play <span className="user-answer">{props.boardgame}</span> this time</li>
        <li>
          You want to play on <span className="user-answer">{props.weekday}</span>
        </li>
        {props.approval === 'Yes' && (
          <li><span className="user-answer">{props.approval}</span>, you would like to play videogames as well</li>
        )
        }
      </ul>
    </section>
  )
}