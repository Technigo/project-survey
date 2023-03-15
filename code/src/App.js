/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Points } from 'components/points'
import { bestThing } from 'components/bestThing';
import { Impression } from 'components/impression'
import { Answer } from 'components/answer'
import { Summary } from './components/Summary';

export const App = () => {
  const [step, setStep] = useState(1);
  const [bestThing, setBestThing] = useState('')
  const [name, setName] = useState()
  const [Points, setPoints] = useState();
  const [Impression, setImpression] = useState('')
  const [Answer, setAnswer] = useState();

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Points points={Points} setPoints={setPoints} />
      )}
      {step === 3 && (
        <bestThing bestThing={bestThing} setDrink={setBestThing} />
      )}
      {step === 4 && (
        <Impression impression={Impression} setImpression={setImpression} />
      )}
      {step === 5 && (
        <Answer answer={Answer} setImpression={setAnswer} />
      )}
      {step >= 6 && (
        <Summary
          name={name}
          points={Points}
          location={bestThing}
          impression={Impression}
          answer={Answer} />
      )}

      {step < 4 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}

/* return (
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
                <input className="namefield" type="text" onChange={(event) => 
                  setName(event.target.value)}
                value={name} required />
              </form>
            </div>

            <div className="bestthingbox">
              <h3><span>Nice to meet you! What is your overall impression of the site?</span></h3>
              <label>
                <input
                  type="radio"
                  value="One"
                  onChange={(event) => setPoints(event.target.value)}
                  checked={points === 'One'} />
                Terrible!
              </label>
              <label>
                <input
                  type="radio"
                  value="Two"
                  onChange={(event) => setPoints(event.target.value)}
                  checked={points === 'Two'} />
                Its alright...
              </label>
              <label>
                <input
                  type="radio"
                  value="Three"
                  onChange={(event) => setPoints(event.target.value)}
                  checked={points === 'Three'} />
                Quite nice!
              </label>
              <label>
                <input
                  type="radio"
                  value="Four"
                  onChange={(event) => setPoints(event.target.value)}
                  checked={points === 'Four'} />
                Awesome!
              </label>
            </div>

            <div className="selectbox">
              <h3> <span> Ok, what is the best thing about the site? </span></h3>
              <select className="dropdown" onChange={(event) => setBestThing(event.target.value)} 
              value={bestThing}>
                <option value="None">Choose option</option>
                <option value="The design">The design</option>
                <option value="The accessibility">The accessibility</option>
                <option value="The information flow">The information flow</option>
                <option value="Everything">I like everything!</option>
              </select>
            </div>

            <div className="selectbox">
              <h3> <span> Thank you! What do you think about the looks of our site? </span></h3>
              <select className="dropdown" onChange={(event) => setImpression(event.target.value)} 
              value={impression}>
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

            <button onClick={() => setSubmitted(true)} type="submit">SUBMIT</button>
          </form>
        </div>
      )}

      <div className="summary">
        {submitted && <Summary
          name={name}
          location={bestThing}
          ageGroup={ageGroup}
          impression={impression}
          answer={answer} />}
      </div>

    </div>
  )
} */