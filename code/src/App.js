import React, { useState } from 'react'
import "./index.css"
import { Summary } from './Summary'


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
      <div className="container">
      <h1 className="header">Johanna's food survey</h1>
      <p className="introtext">Please answer these questions regarding food.</p>
    
    <form onSubmit={handleSubmit}>
      <label className="survey-food">
        1. What is your favourite food? <br></br>
        <input
        type="text"
        value={food}
        onChange={event => setFood(event.target.value)}
        required
        />
      </label> 
      <br></br>
      <section className="icecream-section">
      <label className="survey-icecream">
        2. What is your favourite ice cream? <br></br>   
        <select
        value={icecream}
        onChange ={event => setIcecream (event.target.value)}
        required
        name="icecream" 
        id="" 
        form="">
        <option value="">Choose here</option>
        <option value="chocolate">Chocolate</option>
        <option value="vanilla">Vanilla</option>
        <option value="strawberry">Strawberry</option>
        </select>
      </label>
      </section>
      <br></br>
      <section className="drink-section" id="drink">
        3. Choose your favourite drink? 
      <div className="option-container">
      <label ClassName="option">
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
      <label ClassName="option">
        Coffee      
        <input
          type="radio"
          checked={drink === "coffee"}
          value="coffee"
          name="drink"
          onChange={(e) => {setDrink (e.target.value)}}
          required
          />
      </label>
      <label ClassName="option">
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
    
    {showSummary && (
      <Summary food={food} drink={drink} icecream={icecream}/>
    )}
    </>
  )
}
