import React, { useState } from 'react'
import './style.css'


export const App = () => {
  const [reflection, setReflection] = useState(""); // the thing we have in the paranthesis is the initial state. If we console log status it's gonna show the thing in the paranthesis. If it's gonna show strings you use "" if it's gonna show bolean you write true or false etc, if i's gonna show an array you write []. 
  const [reason, setReason] = useState("");
  const [weather, setWeather] = useState("")
  const [culture, setCulture] = useState ("")

  const reflectionOptions = ["Good", "Ok", "Bad"]

  const handleSubmit = event => {
    event.preventDefault()
  }


  return (
    <main>
        <form onSubmit= {handleSubmit}>
          <header>
            <h1>My daily reflections</h1>
          </header>

          <section className="reflection-section">
            <h2 className="question">How is your day?</h2>
            <select
              value={reflection}
              onChange ={event => setReflection(event.target.value)}
              required
            >
              <option value="good">Good</option>
              <option value="ok">Ok</option>
              <option value="bad">Bad</option>
            </select>
          </section>

          <section className="reason-section">
            <label className="question">
            How come?
              <input 
                type="text"
                value={reason}
                onChange={event => setReason (event.target.value)}
              />
            </label>
          </section>

          <section className="weather-section">
            <label className="question">
            Todays weather
              <input 
                type="radio"
                value={weather}
                onChange={event => setWeather (event.target.value)}
              />
            </label>
          </section>

          <section className="culture-section">
            <label className="question">
            Did you read or watch anything you want to share?
              <input 
                type="message"
                value={culture}
                onChange={event => setCulture (event.target.value)}
              />
            </label>
          </section>

      </form>
    </main>
  )
}
