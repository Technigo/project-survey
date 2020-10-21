import React, { useState } from "react"

import "./style.css"
import { Summary } from "./components/Summary.js"
import { Header } from "./components/Header.js"


export const App = () => {
  const [reflection, setReflection] = useState(""); // the thing we have in the paranthesis is the initial state. If we console log status it's gonna show the thing in the paranthesis. If it's gonna show strings you use "" if it's gonna show bolean you write true or false etc, if i's gonna show an array you write []. 
  const [reason, setReason] = useState("");
  const [weather, setWeather] = useState("");
  const [culture, setCulture] = useState ("");
  const [showSummary, setShowSummary] = useState (false);

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <main> 
      {!showSummary && (
        <form onSubmit={handleSubmit}>
          <Header reflection= {reflection}/>
          <section className="reflection-section" id="reflection">
            <h2>How is your day?</h2>
            <img className="arrow" src="./assets/arrow.png"></img>
            <select
              value={reflection}
              onChange ={event => setReflection (event.target.value)}
              required
            >
              <option value=""></option>
              <option value="a splendid day">Splendid</option>
              <option value="a good day">Good</option>
              <option value="an ok day">OK</option>
              <option value="a bad day">Bad</option>
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
            <div className="option-container">
            <label className="option">
              Sunny
              <input 
                type="radio"
                value="sunny"
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            <label className="option">
              Cloudy
              <input
                type="radio"
                value="cloudy"
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            <label className="option">
              Rainy
              <input
                type="radio"
                value="rainy"
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            <label className="option">
              Windy
              <input
                type="radio"
                value="windy"
                onChange={event => setWeather (event.target.value)}
              />
            </label>
            </div>
            <button><a href="#culture">Next</a></button>
          </section>

          <section className="culture-section" id="culture">
            <label className="question">
            Have you read or watched anything?
              <input 
                type="message"
                value={culture}
                onChange={event => setCulture (event.target.value)}
                required
              />
            </label>
            <button type="submit" className="submit">Done for today!</button>
          </section>
      </form>
      ) } 
      
      {showSummary && <Summary reflection={reflection} weather={weather}/>}
    
    </main>

    );
  };
