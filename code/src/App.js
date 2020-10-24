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
      <label className="surveyfood">
        What is your favourite food? <br></br>
        <input
        type="text"
        value={food}
        onChange={event => setFood(event.target.value)}
        required
        />
      </label> 
      <br></br>
      <label className="surveyicecream">
        What is your favourite ice cream? <br></br>   
        <select name="" id="" form="">
        <option value="chocolate">Chocolate</option>
        <option value="vanilla">Vanilla</option>
        <option value="strawberry">Strawberry</option>
        </select>
      </label>
      <br></br>
      {/* <label>
        Choose your favourite drink?       
        <input
          type="radio"
          checked={water}
          id="water"
          name="drink"
          value="water">
          onChange={(e) => {setDrink (e.target.value)}}
          required
        </input>
      </label> */}
      
      <button type="submit">Submit</button>
    </form>
    </div>
    
    {showSummary && (
      <Summary />
    )}
    </>
  )
}
