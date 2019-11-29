import React, { useState } from "react";
import { Summary } from './Summary';

export const App = () => {
  const [location, setLocation] = useState('')
  const [name, setName] = useState()
  const [ageGroup, setAgeGroup] = useState();
  const [submitted, setSubmitted] = useState(false)
  const [setShowResult] = useState(false);


  return (
    <div>
      {!submitted && (
        <div className="myForm">

          <form
            onSubmit={(event) => {
              event.preventDefault()
              console.log('Submit!')
            }}
          >
            <div className="header">
              <h1>WHEN THERE'S NO TIME TO WASTE.</h1>
            </div>

            <div className="introduction">
              <h2> We know it can be awkward and tricky.
                Don't worry, we won't have "the talk" with you or
                stress you in the cashier.
                Our condoms are free of charge and they're really good.
                We'll even send them right home to your address.
                Fill out the form and we'll take care of the boring part.
                Thanks for wearing rubber.</h2></div>

            <form className="mailbox">
              <h3><span>Your email: {name} ✍️ </span></h3>
              <input type="email" onChange={event => setName(event.target.value)} value={name} required />
            </form>

            <div className="sizebox">
              <h3> <span> Size? </span></h3>
              <select onChange={(event) => setLocation(event.target.value)} value={location}>
                <option value="">Size matters!</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

            <div className="colorbox">
              <h3><span>Preferred color?</span></h3>
              <label>
                <input
                  type="radio"
                  value="Blue"
                  onChange={event => setAgeGroup(event.target.value)}
                  checked={ageGroup === "Blue"}
                />
                Blue 💙
      </label>
              <label>
                <input
                  type="radio"
                  value="Green"
                  onChange={event => setAgeGroup(event.target.value)}
                  checked={ageGroup === "Green"}
                />
                Green 💚
      </label>
              <label>
                <input
                  type="radio"
                  value="Purple"
                  onChange={event => setAgeGroup(event.target.value)}
                  checked={ageGroup === "Purple"}
                />
                Purple 💜
      </label>

              <h2><span role="img" aria-label="Finger pointing down">👇</span></h2>
            </div>

            <button onClick={() => setSubmitted(true)} type="submit">Send</button>
          </form>
        </div>
      )}

      <div className="summary">
        {submitted && <Summary name={name} location={location} ageGroup={ageGroup} />}</div>

    </div>
  )
}




