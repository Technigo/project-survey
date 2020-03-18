import React, { useState } from 'react'
// import { Question1 } from './components/Question1'
// import { Question2 } from './components/Question2'
// import { Question3 } from './components/Question3'
// import { Name } from './components/Name'
import style from 'style.css' 
import index from 'index.js'
import {Summary} from './components/Summary'

export const App = () => {
  const handleSubmit = (event) =>{
    event.preventDefault()
    setshowSummary(true)
  }
  const [name, setName]=useState("")
  const [animal, setAnimal]= useState("Cockroach")
  const [ wouldYouRather, setwouldYouRather]= useState()
  const [riding, setRiding]= useState()
  const [ showSummary, setshowSummary]= useState(false)
    
  return (
    <div>
    {!showSummary ? ( 
    <form onSubmit={handleSubmit}>
    
    <section className="name">
    <h1>What nickname would you like to go by? {name}</h1>
    <input
    type = "text"
    onChange = {event => setName(event.target.value)}
    value = {name}
    >
    </input>
    </section>
    
    
    <section className="question1">
    <label>
    <select
    name='dropdown'
    value = {animal}
    onChange={event => setAnimal(event.target.value)}
    
    >
    <option id='0'>What would be the coolest animal to scale up to the size of a horse?</option>
    <option id='1'>Cockroach</option>
    <option id='2'>Tick</option>
    <option id='3'>Rat</option>
    </select>
    
    </label>
    </section>
    
    
  <section className="question2">
    <h2>Choose one...</h2>
    <h1>Would you rather...</h1>
    <h1>have edible spaghetti hair that regrows every night or sweat maple syrup?</h1>
    
    <label>
      <input
      type="radio"
      value="spaghetti"
      onChange = {event => setwouldYouRather(event. target. value)}
      checked = {wouldYouRather === "spaghetti"}
      required
      />
      Have spagehetti for hair
    </label>

    <label>
      <input
      type="radio"
      value="syrup"
      onChange = {event => setwouldYouRather(event. target. value)}
      checked = {wouldYouRather === "syrup"}
      required
      />
      Sweat Syrup
    </label>
      
   </section>
      
      <section className="Question3">
      <h1>If you lost the ability to walk and had 
      to to ride around on an animal for 
      the rest of your life. Which one would you choose?</h1>
      
      <label>
        <input
          type="radio"
          value="Kangaroo"
          onChange = {event => setRiding(event.target.value)}
          checked = {riding === "Kangaroo"}
        />
      Kangaroo

      </label>

      <label>
        <input
          type="radio"
          value="Giraffe"
          onChange = {event => setRiding(event.target.value)}
          checked = {riding === "Giraffe"}
          />
        Giraffe
      </label>
        
      <label>
        <input
          type="radio"
          value="Hippo"
          onChange = {event => setRiding(event.target.value)}
          checked = {riding === "Hippo"}
          />
        Hippo
      </label>
        
        </section>
        
        <section className="submit">
        <button type="submit">Submit your answers!</button>
        </section>
        
        </form>
       
        
        ) : (
        < Summary name={name} riding={riding} animal={animal} />
        )}
        
        </div>
        )
      }
      
      
     
      