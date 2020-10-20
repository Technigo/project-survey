import React from 'react'

export const Summary = (props) => {
    return(
      <section className="summary">
        <h1>Hey {props.name}!</h1>
        <h2>You have ordered {props.quantity} {props.favorite} icecream.</h2>
    </section>
    )
}