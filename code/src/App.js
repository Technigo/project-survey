/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Summary } from './components/Summary';

export const App = () => {
  const [location, setLocation] = useState('')
  const [name, setName] = useState()
  const [ageGroup, setAgeGroup] = useState();
  const [submitted, setSubmitted] = useState(false)
  const [impression, setImpression] = useState('')
  const [answer, setAnswer] = useState();

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
              <form className="namebox">
                <h3><span>Your name: {name} ✍️ </span></h3>
                <input className="namefield" type="text" onChange={(event) => setName(event.target.value)} value={name} required />
              </form>
            </div>

            <div className="bestthingbox">
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
                Awesome!
              </label>
            </div>

            <div className="selectbox">
              <h3> <span> Ok, what is the best thing about the site? </span></h3>
              <select className="dropdown" onChange={(event) => setLocation(event.target.value)} value={location}>
                <option value="None">Choose option</option>
                <option value="The design">The design</option>
                <option value="The accessibility">The accessibility</option>
                <option value="The information flow">The information flow</option>
                <option value="Everything">I like everything!</option>
              </select>
            </div>

            <div className="selectbox">
              <h3> <span> Thank you! What do you think about the looks of our site? </span></h3>
              <select className="dropdown" onChange={(event) => setImpression(event.target.value)} value={impression}>
                <option value="None">Choose option</option>
                <option value="Bad">Bad!</option>
                <option value="Ordinary">Ordinary...</option>
                <option value="Nice">Nice!</option>
                <option value="Amazing">Amazing!</option>
              </select>
            </div>

            <div className="bestthingbox">
              <h3><span>Would you recommend this site to a friend?</span></h3>
              <label>
                <input
                  type="radio"
                  value="Yes"
                  onChange={(event) => setAnswer(event.target.value)}
                  checked={answer === 'Yes'} />
                Yes!
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  onChange={(event) => setAnswer(event.target.value)}
                  checked={answer === 'No'} />
                No!
              </label>
            </div>

            <h2><span className="finger" role="img" aria-label="Finger pointing down">👇</span></h2>

            <button onClick={() => setSubmitted(true)} type="submit">SUBMIT</button>
          </form>
        </div>
      )}

      <div className="summary">
        {submitted && <Summary
          name={name}
          location={location}
          ageGroup={ageGroup}
          impression={impression}
          answer={answer} />}
      </div>

    </div>
  )
}