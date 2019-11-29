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
    <div >
      <div className="form-container">
        <div>
          {showResult && (
            <div className="santa-answer">
              <h1>Soon it is Christmas, {name} </h1>
              <h3>Ooh, {food} and {candy}, is my favo too!
            Your wishes for Cristmas dinner at {time} o'clock and a visit after that is now on my list.
            Best wishes of a merry Christmas // <span role="img" aria-label="Santa">🎅🏻</span></h3>
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
                <input autofocus="autofocus"
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
                  <option value="Grönkål"> Grönkål </option>
                  <option value="Köttbullar"> Köttbullar </option>
                  <option value="Gravad lax"> Gravad lax </option>
                  <option value="Rödbetssallad"> Rödbetssallad </option>
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
                  <label className="eatTime-label" key={eat}>
                    <input
                      type="radio"
                      value={eat}
                      onChange={event => setTime(event.target.value)}
                      checked={time === eat}
                    />
                    <span className="styleBox" />
                    at {eat}
                  </label>
                ))}
              </fieldset>
            </section>


            <section className="visit-section">
              <fieldset>
                <h2>Do you want Santa to visit on Christmas Eve?</h2>
                <label className="visit-label">
                  <input
                    type="checkbox"
                    checked={wantsVisit}
                    onChange={event => setWantsVisit(event.target.checked)}
                    value={name}
                  />
                  <span className="styleBox" />
                  Yes
                </label>
              </fieldset>
            </section>

            <button type="submit">
              Send to Santa
        </button>

          </form>
        )}

      </div >
      <footer>
        <a className="madeby" href="mailto:ninamansster@gmail.com"> Second React project by Nina Månsson at Technigo Frontend Bootcamp 2019
</a>
      </footer>
    </div >
  )
}
