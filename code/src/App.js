import React, { useState } from 'react'
import hero from './hero.png'

import './App.css'
import './index.css'
import './header.css'


export const App = () => {
  const [name, setName] = useState("Fill in name here");
  const [nickName, setnickName] = useState("Fill in nickname here");
  const [definition, setDefinition] = useState("");
  const [love, setLove] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  const handleShowSurvey = (event) => {
    event.preventDefault()
    setShowSurvey(true)
  }

  const renderMessage = () => {
    if (love === "Yes") {
      return <p>Make sure to hold on tight to your {nickName} and never let go!</p>
    }
    else {
      return <p>Maybe it is time to let go of {nickName}?</p >
    }
  }

  return (
    <div>

      {showSurvey && !showResult && (
        <div>

          <article className="survey">
            <h1>Fill in and find the thruth of your heart</h1>

            <form onSubmit={handleSubmit}>

              <section className="questionWrapper">

                <div class="question">
                  <h2>Hi there! What's your name?</h2>
                  <input
                    type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                  />
                </div>
                <div className="seperator"></div>

              </section>

              <section className="questionWrapper">

                <div class="question">
                  <h2>What's your nickname of your partner?</h2>
                  <input
                    type="text"
                    onChange={event => setnickName(event.target.value)}
                    value={nickName}
                  />
                </div>
                <div className="seperator"></div>

              </section>

              <section className="questionWrapper">
                <div class="questionRadio">
                  <h2>Do you love your partner?</h2>
                  <div className="radioButtons">
                    <label>
                      <input
                        className="radio"
                        type="radio"
                        value="Yes"
                        onChange={event => setLove(event.target.value)}
                        checked={love === "Yes"}
                      />
                      <div class="fakeCheckbox"></div>
                      Yes
</label>
                    <label>
                      <input
                        className="radio"
                        type="radio"
                        value="No"
                        onChange={event => setLove(event.target.value)}
                        checked={love === "No"}
                      />
                      <div class="fakeCheckbox"></div>
                      No
</label>
                  </div>
                </div>

                <div className="seperator"></div>
              </section>

              <section className="questionWrapper">
                <div class="dropdown">
                  <h2>What is your partner to you?</h2>
                  <select
                    onChange={event => setDefinition(event.target.value)}
                    value={definition}>
                    <option value="">Choose here!</option>
                    <option value="best friend for life!">Best friend for life</option>
                    <option value="greatest love!">Greatest love</option>
                    <option value="friend with benefits! Baam baaam!">Friend with benefits</option>
                    <option value="goofy goof ball!">Goof ball</option>
                    <option value="inspiration in life!">Muse in life</option>
                  </select>
                </div>
                <div className="seperator"></div>
              </section>
              <section className="submit">
                <button
                  type="submit"
                >Submit
        </button>
              </section>
            </form>
          </article>
          <footer></footer>
        </div>
      )}

      {!showSurvey && (
        <header>
          <img src={hero} height="400px" width="auto" />
          <h1>What do you really think of your partner?</h1>
          <button type="button" onClick={handleShowSurvey}>Find out here!</button>
        </header>
      )}

      {showResult && (
        <div className="result">
          <h1>The result</h1>
          <h2>Hi {name}!</h2>
          <p>Do you really love your partner {nickName}? Ooooohhh {love}!</p>
          <p>For you, {nickName} is your {definition}</p>
          {renderMessage()}
        </div>
      )}


    </div>
  )
}
