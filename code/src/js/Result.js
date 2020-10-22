import React from 'react'

import '../css/result.css'

export const Result = ({ legal, drink, alcohol }) => {

  return (
    <div className="result">
      {legal ? (
        <h2>Your drink is served: {alcohol} {drink}!</h2>
      ) : (
          <h2> Come back when you are 18!</h2>
        )
      }
    </div >
  )
}