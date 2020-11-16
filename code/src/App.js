import React, { useState } from 'react'

import { Summary } from './Summary'
import { Header } from './Header'

import "./index.css"

export const App = () => {
  const [food, setFood] = useState("")
  const [icecream, setIcecream] = useState("")
  const [drink, setDrink] = useState("")
  const [showSummary, setShowSummary] = useState (false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <>
      <Header />
    <div className="container-parent">
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label className="survey-food">
        1. What is your favourite food?
        <input className="input"
          type="text"
          value={food}
          onChange={event => setFood(event.target.value)}
          required
        />
      </label> 

      <section className="icecream-section">
      <label className="survey-icecream">
        2. What is your favourite ice cream?   
        <select className="select"
          value={icecream}
          onChange ={event => setIcecream (event.target.value)}
          required
          name="icecream" 
          id="" 
          form=""
        >
        <option value="">Choose here</option>
        <option value="mango sorbet">Mango sorbet</option>
        <option value="chocolate">Chocolate</option>
        <option value="salty liquorice">Salty liquorice</option>
        </select>
      </label>
      </section>

      <section className="drink-section" id="drink">
        3. Choose your favourite drink? 
      <div className="option-container">
      <label className="option">
        Water      
        <input
          type="radio"
          checked={drink === "water"}
          value="water"
          name="drink"
          onChange={(e) => {setDrink (e.target.value)}}
          required
          />
      </label>

      <label className="option">
        Coffee      
        <input
          type="radio"
          checked={drink === "coffee"}
          value="coffee"
          name="drink"
          onChange={(e) => setDrink (e.target.value)}
          required
          />
      </label>
      
      <label className="option">
        Lemonad      
        <input
          type="radio"
          checked={drink === "lemonad"}
          value="lemonad"
          name="drink"
          onChange={(e) => {setDrink (e.target.value)}}
          required
          />
      </label>
      </div>
      </section>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    
    {showSummary && (
      <Summary food={food} drink={drink} icecream={icecream}/>
    )}
    </>
  )
}
