import React from 'react'

export const Summary = ({ name, dish, amount }) => (
  <section>
    <h2>Dina svar</h2>
    <h3>namn: {name}</h3>
    <h3>fav dish: {dish}</h3>
    <h3>antal: {amount}</h3>
  </section>
)