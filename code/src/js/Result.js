import React from 'react'

import { drinks } from './Drinks.js'

import '../css/result.css'

export const Result = ({ legal, drink, alcohol }) => {

  const drinkOrder = drinks.find(item => item.id === drink)

  return (
    <div className="result">

      {legal ? (
        <>
          <figure className="card">
            <img src={drinkOrder.img} alt="drinkObject.name"></img>
            <figcaption><span className="fun">{alcohol}</span><br></br> {drinkOrder.name}</figcaption>
          </figure>

        </>
      ) : (
          <figure className="card">
            <img src="https://images.unsplash.com/photo-1564644411757-a723deba07a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Water"></img>
            <figcaption><span className="fun">Glass of</span><br></br> Water</figcaption>
          </figure>
        )
      }
    </div >
  )
}