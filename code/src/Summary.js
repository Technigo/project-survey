import React from 'react'

export const Summary = ({age, artist, christmas, food, name, tvseries}) => (
  <div className="summary">
    <h2>Thank you for your answers {name}</h2>
    <p>Age group: {age} years</p>
    <p>Favourite food: {food}</p>
    <p>Favourite artist: {artist}</p>
    <p>Favourite tv-series: {tvseries}</p>
    <p>How much you like Christmas: {christmas} points</p>
    <p className="greeting">Merry Christmas!</p>
  </div>
)