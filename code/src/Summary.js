import React from 'react'
import './summary.css'


export const Summary = (props) => {
  const { proud } = props
  const { happy } = props
  const { smile } = props

  return (
    <section className="summary-section">
      <h2>Summary of your day</h2>
      <p>You had {happy} and you should be really proud of {proud}. {smile === "Yes" && <p>You also made someone smile, how great is that?</p>}
        Take a deep breath and relax. Tomorrow is a new day.</p>
      <button><a href="">Return</a></button>
    </section>
  )
}