import React, { useState } from 'react'
import { Header } from './Header.js'
import { Summary } from './Summary.js'

export const App = () => {

  const [name, setName] = useState("")
  const [favorite, setFavorite] = useState("")
  const [quantity, setQuantity] = useState("")
  const [summary, setSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSummary(true)
  }

  console.log(name)
  console.log(favorite)
  console.log(quantity)

  return (
    <>
    <Header />

    {!summary && <form onSubmit={handleSubmit}>
      
      <label>
        What is your name?
        <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        required
        >
        </input>
      </label>
      <label>
        What is your favorite ice cream?
        <select
        onChange={event => setFavorite(event.target.value)}
        value={favorite}
        >
          <option value="">Select ice cream</option>
          <option value="chocolate">Chocolate</option>
          <option value="vanilla">Vanilla</option>
          <option value="strawberry">Strawberry</option>
        </select>
      </label>
      <label>
        How many cups would you like?
        <input
        type="radio"
        value="one"
        name="icecream"
        onChange={event => setQuantity(event.target.value)}
        checked={quantity === "one"}
        >
        </input>
        <label>
          One
        </label>
        <input
        type="radio"
        value="two"
        name="icecream"
        onChange={event => setQuantity(event.target.value)}
        checked={quantity === "two"}
        >
        </input>
        <label>
          Two
        </label>
        <input
        type="radio"
        value="three"
        name="icecream"
        onChange={event => setQuantity(event.target.value)}
        checked={quantity === "three"}
        >
        </input>
        <label>
          Three
        </label>
      </label>
      <button
      type="submit"
      >
        Place your order
      </button>
    </form>}

    {summary && 
    <Summary 
    name={name} 
    favorite={favorite} 
    quantity={quantity} 
    /> }
    </>
  )
}
