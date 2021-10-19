import React from 'react'
import './summary.css'


export const Summary = (props) => {
  const { snack } = props
  const { drink } = props
  const { party } = props

  return (
    <section className="summary-section">
      <h2>Summary of your glögg</h2>
      <p>You like {drink} and you add {snack}. {party === "Yes" && <p>If you are having a glöggmingel, you need to invite me, what time?</p>}
      </p>
      <button><a href="">Return</a></button>
    </section>
  )
}