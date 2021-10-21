import React from 'react'
import './summary.css'

export const Summary = (props) => {
  const { snack } = props
  const { drink } = props
  const { party } = props

  return (
    <section className="summary-section">
      <h2>Summary of your favorite glögg</h2>
      <p>You like {drink} and you add {snack}.
        {party === 'Yes' && <p>If you are having a glöggmingel, you need to invite me, what time should I come?</p>}
        {party === 'No' && <p>No glöggmingel? You can come to mine.</p>}
        {party === 'Maybe' && <p>Maybe, maybe not a glöggmingel.. You need to drink some Glögg and think about it.</p>}
      </p>
      <button type="submit"><a href="return">Return</a></button>
    </section>
  )
}