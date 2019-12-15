import { useState } from 'react'
import React from 'react'
import './app.css'


export const App = () => {

  const environElectricity = ["Yes", "No"]
  const environShopping = ["Yes", "No"]

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [others, setOthers] = useState('')
  const [transport, setTransport] = useState('')
  const [useCar, setUseCar] = useState('')
  const [heating, setHeating] = useState('')
  const [knowsBetter, setKnowsBetter] = useState(false)
  const [electricity, setElectricity] = useState()
  const [shopping, setShopping] = useState()
  const [showResult, setShowResult] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }


  return (
    <div>
      <div className="formContainer">
        <div>
          {showResult && (
            <div className="santaAnswer">
              <h1>Good thinking, {name} !!!</h1>

              <h3>Summary: You go by {transport} to work or school and you use the car to {useCar}.
              Here are your other answers in summary:

              <ul>
                  <li>Heating - {heating}</li>
                  <li>Electricity - {electricity}</li>
                  <li>Second hand - {shopping}</li>
                  <li>Recycling - {others}</li>
                </ul>
                Thanks for completing the questions!
                Continue to think of the sources to carbon dioxid!
                Bye bye
              <br />
                <span role="img" aria-label="Sunflower">🌻</span></h3>
            </div>
          )}
        </div>

        {!showResult && (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <h1>Your sources to CO2</h1>
              <h2>With the questions in this survey you can be more aware of when C02 is emitted.</h2>
            </fieldset>
            <section className="inputContainer">
              <fieldset>
                <input autofocus="autofocus"
                  type="text"
                  placeholder="What is your name?"
                  onChange={event => setName(event.target.value)}
                  value={name}
                />

                <input autofocus="autofocus"
                  type="text"
                  placeholder="Where do you live?"
                  onChange={event => setLocation(event.target.value)}
                  value={location}
                />
              </fieldset>
            </section>

            <div className="transport">
              <fieldset>
                <h2>My normal transportation to school or work is:</h2>
                <label>
                  <input
                    type="radio"
                    value="bike"
                    onChange={() => setTransport('bike')}
                    checked={transport === 'bike'} />
                  <span role="img" aria-label="take the bike">
                    🚲
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="car"
                    onChange={() => setTransport('car')}
                    checked={transport === 'car'} />
                  <span role="img" aria-label="take the car">
                    🚗
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="bus"
                    onChange={() => setTransport('bus')}
                    checked={transport === 'bus'} />
                  <span role="img" aria-label="take the bus">
                    🚌
                  </span>
                </label>
              </fieldset>
            </div>

            <section>
              <fieldset>
                <h2>The car is an extremely flexibel and useful vehicle that most of us are using daily. </h2>

                <h2>I use car to: </h2>
                <select
                  onChange={event => setUseCar(event.target.value)}
                  value={useCar} >
                  <option value="">Select one option: </option>
                  <option value="go Shopping"> go Shopping </option>
                  <option value="go to Activities"> go to Activities </option>
                  <option value="go Recycling"> go Recycling </option>
                  <option value="get to Work"> get to Work </option>
                  <option value="go to Child care"> go to Child care </option>
                </select>
              </fieldset>
            </section>

            <section>
              <fieldset>
                <h2>In Sweden it is cold in the winter and we need energy to have a nice indoor climate.</h2>
                <h2>My home is heated through:</h2>
                <select
                  onChange={event => setHeating(event.target.value)}
                  value={heating} >
                  <option value=""> Select one option: </option>
                  <option value="Central heating"> Central heating </option>
                  <option value="Heat pump"> Heat pump </option>
                  <option value="Wood heating"> Wood heating </option>
                  <option value="Oil"> Oil </option>
                </select>
              </fieldset>
            </section>

            <section>
              <fieldset>
                <h2>Have you checked if your electricity comes from non-fossil sources?</h2>

                <h2>I use electricity with environment label at home:</h2>

                {environElectricity.map(YelN => (
                  <label className="eatTime-label" key={YelN}>
                    <input
                      type="radio"
                      value={YelN}
                      onChange={event => setElectricity(event.target.value)}
                      checked={electricity === YelN}
                    />
                    <span className="styleBox" />
                    {YelN}
                  </label>
                ))}
              </fieldset>
            </section>

            <section>
              <fieldset>
                <h2>When shopping, it is good if you use the things to the full. It is also good if things are used for a long time, either by you or someone else.</h2>

                <h2>I sometimes shop clothes and thing in second hand:</h2>

                {environShopping.map(yN => (
                  <label key={yN}>
                    <input
                      type="radio"
                      value={yN}
                      onChange={event => setShopping(event.target.value)}
                      checked={shopping === yN}
                    />
                    <span className="styleBox" />
                    {yN}
                  </label>
                ))}
              </fieldset>
            </section>

            <section className="inputContainer">
              <fieldset>
                <h2>Depending on where and how you live it can be really easy to recycle almost everything. More knowledge and easier ways to recycle can help us recycle more.  </h2>
                <h2>What do you find hard to recycle and why?</h2>

                <input autofocus="autofocus"
                  type="text"
                  placeholder="Not recycled?"
                  onChange={event => setOthers(event.target.value)}
                  value={others}
                />
              </fieldset>
            </section>


            <section className="better-section">
              <fieldset>
                <h2>The query briefly deals with the sources to CO2. Continue to question where you use CO2 daily! </h2>
                <h2>I will continue to think about sources to C02:</h2>
                <label className="better-label">
                  <input
                    type="checkbox"
                    checked={knowsBetter}
                    onChange={event => setKnowsBetter(event.target.checked)}
                    value={name}
                  />
                  <span className="styleBox" />
                  Yes
                </label>
              </fieldset>
            </section>

            <button type="submit">
              Continue
            </button>
          </form>
        )}

      </div >
      <footer>
        <a className="madeBy" href="mailto:ninamansster@gmail.com"> Second React project by Nina Månsson at Technigo Frontend Bootcamp 2019
            </a>
      </footer>
    </div >
  )
}
