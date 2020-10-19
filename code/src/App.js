import React, { useState } from 'react'
import './style.css'


export const App = () => {
  const [reflection, setReflection] = useState(""); // the thing we have in the paranthesis is the initial state. If we console log status it's gonna show the thing in the paranthesis. If it's gonna show strings you use "" if it's gonna show bolean you write true or false etc, if i's gonna show an array you write []. 
  const [reason, setReason] = useState("");
  const [weather, setWeather] = useState("")
  const [culture, setCulture] = useState ("")

  const reflectionOptions = ["Splendid",  "Good", "Ok", "Bad"]

  const handleSubmit = event => {
    event.preventDefault()
  }


  return (
    <main>
        <form onSubmit= {handleSubmit}>
          <header>
            <h1>Daily notes</h1>
            <a href="#reflection">hej</a>
          </header>

          <section className="reflection-section" id="reflection">
            <h2 className="question">How is your day?</h2>
            <select
              value={reflection}
              onChange ={event => setReflection(event.target.value)}
              required
            >
              <option value="good">Splendid</option>
              <option value="good">Good</option>
              <option value="ok">OK</option>
              <option value="bad">Bad</option>
            </select>
            <button><a href="#reason">Next</a></button>
          </section>

          <section className="reason-section" id="reason">
            <label className="question">
            How come?
              <input 
                type="text"
                value={reason}
                onChange={event => setReason (event.target.value)}
              />
            </label>
            <button><a href="#weather">Next</a></button>
          </section>

          <section className="weather-section" id="weather">
            <h2>Today's weather</h2>
            <label className="question">
              Sunny
              <input 
                type="radio"
                value={weather}
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            <label className="question">
              Cloudy
              <input
                type="radio"
                value={weather}
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            <label className="question">
              Rainy
              <input
                type="radio"
                value={weather}
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            <label className="question">
              Windy
              <input
                type="radio"
                value={weather}
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            <button><a href="#culture">Next</a></button>
          </section>

          <section className="culture-section" id="culture">
            <label className="question">
            Did you read or watch anything you want to share?
              <input 
                type="message"
                value={culture}
                onChange={event => setCulture (event.target.value)}
              />
            </label>
            <button type="submit">Done for today!</button>
          </section>

      </form>
    </main>
  )
}
