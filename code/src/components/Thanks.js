import React from 'react'
import '../index.css';

export const Thanks = ({ name, colors, ammount, shape }) => {
  return (
    <div className="thanks-container">
      <p>Thanks so much, {name}!</p>
      <p>Your {ammount} {colors.label} shrimp are on their way.</p>
      <p>Hope they will like it in your {shape} aquarium!</p>
      <div>
        <img className="shrimp-img" src={colors.imgSrc} alt={colors.name} />
      </div>
      <button type="button" onClick={() => window.location.reload()}>Start over</button>
    </div>
  )
}