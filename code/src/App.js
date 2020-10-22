import React, { useState } from 'react'
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
      <h2 className="header">Johanna's survey</h2>
      <p className="introtext">Please answer these questions regarding food.</p>
    
    <form onSubmit={handleSubmit}>
      <label>
        What is your favourite food?
        <input
        type="text"
        value={food}
        onChange={event => setFood(event.target.value)}
        required
        />
      </label>
      {/* <label>
        What is your favourite ice cream?       
        <select name="" id="" form="">
        <option value="chocolate">Chocolate</option>
        <option value="vanilla">Vanilla</option>
        <option value="strawberry">Strawberry</option>
        </select>
      </label>
      <label>
        Choose your favourite drink?       
        <input
        type="radio"
        id="water"
        name="drink"
        value="water">
        <label for="water">Water</label>
        
        
        
        </input>
      </label> */}
      <button type="submit">Submit</button>
    </form>
    
    {showSummary && <section>
      <h1>Hello you, thanks for participating!</h1>
    </section>}
    </>
  )
}
