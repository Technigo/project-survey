import React from 'react'

const Summary = (props) => {
  return (
    <section>
      <h2>{props.answers[0]} your {props.answers[2]} is already cooling!!</h2>
      <h3>I will prepare some {props.answers[1]} food for sure!</h3>
      <p>Don{'\''}t be afraid of any allergens! I will remember about: {props.answers[3]}</p>
    </section>
  )
}

export default Summary