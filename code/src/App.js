import React, { useState } from 'react';
import { Summary } from './components/Summary';

export const App = () => {
  const [location, setLocation] = useState('')
  const [name, setName] = useState()
  const [ageGroup, setAgeGroup] = useState();
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      {!submitted && (
        <div className="myForm">

          <form
            onSubmit={(event) => {
              event.preventDefault()
              console.log('Submit!')
            }}>
            <div className="header">
              <h1>Website feedback survey</h1>
            </div>

            <div className="introduction">
              <h2>Hi, my name is Emilia. Who are you?
              </h2>
            </div>

            <form className="mailbox">
              <h3><span>Your name: {name} ✍️ </span></h3>
              <input type="text" onChange={(event) => setName(event.target.value)} value={name} required />
            </form>

            <div className="colorbox">
              <h3><span>Nice to meet you! What is your overall impression of the site?</span></h3>
              <label>
                <input
                  type="radio"
                  value="One"
                  onChange={(event) => setAgeGroup(event.target.value)}
                  checked={ageGroup === 'One'} />
                Terrible!
              </label>
              <label>
                <input
                  type="radio"
                  value="Two"
                  onChange={(event) => setAgeGroup(event.target.value)}
                  checked={ageGroup === 'Two'} />
                Its alright...
              </label>
              <label>
                <input
                  type="radio"
                  value="Three"
                  onChange={(event) => setAgeGroup(event.target.value)}
                  checked={ageGroup === 'Three'} />
                Quite nice!
              </label>
              <label>
                <input
                  type="radio"
                  value="Four"
                  onChange={(event) => setAgeGroup(event.target.value)}
                  checked={ageGroup === 'Four'} />
                I like it!
              </label>

            <div className="sizebox">
              <h3> <span> Ok, what's the best thing about the site? </span></h3>
              <select onChange={(event) => setLocation(event.target.value)} value={location}>
                <option value="">Choose option</option>
                <option value="Design">The design</option>
                <option value="Accesibility">The accesibility</option>
                <option value="Information">Information flow</option>
                <option value="Everything">I like everything!</option>
              </select>
            </div>

              <h2><span role="img" aria-label="Finger pointing down">👇</span></h2>
            </div>

            <button onClick={() => setSubmitted(true)} type="submit">Send</button>
          </form>
        </div>
      )}

      <div className="summary">
        {submitted && <Summary name={name} location={location} ageGroup={ageGroup} />}
      </div>

    </div>
  )
} 