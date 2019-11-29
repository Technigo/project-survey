import { useState } from 'react'
import React from 'react'
import './app.css'


export const App = () => {

  const dinnerTime = ["13", "16"]

  const [name, setName] = useState('')
  const [food, setFood] = useState('')
  const [candy, setCandy] = useState('')
  const [wantsVisit, setWantsVisit] = useState(false)
  const [time, setTime] = useState()
  const [showResult, setShowResult] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }


  return (

    <div className="form-container">
      <div>
        {showResult && (
          <div className="santa-answer">
            <h1>Soon it is Christmas,{name} </h1>
            <h2>Ooh, {food} and {candy}, is my favo too!
            Your wishes for {food} and {candy} at {time} o'clock is now on my list.</h2>
            <h2>Best wishes of a merry merry Christmas // <span role="img" aria-label="Santa">🎅🏻</span> :</h2>
          </div>
        )}

      </div>

      {!showResult && (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h1>Ho, ho, Santa wants your input for Christmas Eve</h1>
          </fieldset>
          <section className="input-container">
            <fieldset>
              <input
                type="text"
                placeholder="Your name"
                onChange={event => setName(event.target.value)}
                value={name}
              />
            </fieldset>
          </section>

          <section className="food-section">
            <fieldset>
              <h2>What do you want to eat? </h2>
              <select
                onChange={event => setFood(event.target.value)}
                value={food} >
                <option value=""> pick your favo </option>
                <option value="Julskinka"> Julskinka </option>
                <option value="Jansson"> Jansson </option>
                <option value="Omelett"> Omelett </option>
                <option value="Senapssill"> Senapssill </option>

              </select>
            </fieldset>
          </section>

          <section className="candy-section">
            <fieldset>
              <h2>And for candies?</h2>
              <select
                onChange={event => setCandy(event.target.value)}
                value={candy} >
                <option value=""> pick your favo </option>
                <option value="Knäck"> Knäck </option>
                <option value="Choclate"> Choclate </option>
                <option value="Mozartkugeln"> Mozartkugeln </option>
                <option value="Kola"> Kola </option>
              </select>
            </fieldset>
          </section>


          <section>
            <fieldset>
              <h2>What time do you want to eat dinner?</h2>

              {dinnerTime.map(eat => (
                <label key={eat}>
                  <input
                    type="radio"
                    value={eat}
                    onChange={event => setTime(event.target.value)}
                    checked={time === eat}
                  />
                  <p>at {eat}</p>
                </label>
              ))}
            </fieldset>
          </section>


          <section className="visit-section">
            <fieldset>
              <h2>Do you want Santa to visit on Christmas Eve?</h2>
              <label>
                <input
                  type="checkbox"
                  checked={wantsVisit}
                  onChange={event => setWantsVisit(event.target.checked)}
                  value={name}
                />
                <p>Yes</p>
              </label>
            </fieldset>
          </section>

          <button type="submit">
            Send to Santa
        </button>

        </form>
      )}
    </div >
  )
}
