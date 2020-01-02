import React, { useState } from 'react'

const videoTimeArray = ["Less than 1 hour", "Between 1-3 hours", "3-24 hours", "More than 24 hours"]
const agreeArray = ["Strongly agree", "Agree", "Disagree", "Strongly disagree", "Neutral"]

const App = () => {
  const [showResult, setShowResult] = useState(false)

  const [videoTime, setVideoTime] = useState()
  const [name, setName] = useState()
  const [agreeDisagree, setAgreeDisagree] = useState()
  const [yesNo, setYesNo] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    window.scrollTo(0, 0)
    setShowResult(true)

  }

  return (
    <div>

      {
        !showResult && (
          <form onSubmit={handleSubmit}>
            <header>
              <h1>Is your cute-cat-video addiction really healthy? Take the survey, and find out today!</h1>
              <div>
                <img src="/images/cat.icon.svg" alt="cat icon" className="cat-icon" />
              </div>
            </header>
            <div className="q-container">
              <h2>How much time do you spend on cute-cat-videos every week?</h2>
              {videoTimeArray.map(timespan => (
                <ul>
                  <li><label key={timespan}>
                    <input
                      type="radio"
                      value={timespan}
                      onChange={event => setVideoTime(event.target.value)}
                      checked={videoTime === timespan}
                    />
                    {timespan}
                  </label>
                  </li>
                </ul>
              ))}
            </div>

            <div className="q-container">
              <h2>The first thing you do in the morning is grabbing your phone to watch some cute cats</h2>
              {agreeArray.map(statement => (
                <ul>
                  <li><label key={statement}>
                    <input
                      type="radio"
                      value={statement}
                      onChange={event => setAgreeDisagree(event.target.value)}
                      checked={agreeDisagree === statement}
                    />
                    {statement}
                  </label>
                  </li>
                </ul>
              ))}
            </div>

            <div className="q-container">
              <h2>Have you experienced increased risk-taking to get access to cute-cat-videos?</h2>
              <select
                onChange={event => setYesNo(event.target.value)}
                value={yesNo}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe...</option>
              </select>
            </div>

            <div className="q-container">
              <label for="name">Reveal your name</label>
              <input
                id="name"
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
              />
            </div>

            <button type="submit">
              Submit
        </button>
          </form>
        )
      }

      {showResult && (
        <div className="q-container final-container">
          <u><h1>Summary</h1></u>
          <h3>How much time do you spend on cute-cat-videos every week?</h3>
          <p>{videoTime}</p>
          <h3>The first thing you do in the morning is grabbing your phone to watch some cute cats</h3>
          <p>{agreeDisagree}</p>
          <h3>Have you experienced increased risk-taking to get access to cute-cat-videos?</h3>
          <p>{yesNo}</p>

          <h2 className="final">Impressive enough! But who are we kidding here, {name}? There is no such thing as a cute-cat-video addiction.</h2>
          <h1>Keep on living the dream!</h1>
          <img src="/images/cat.icon.svg" alt="cat icon" className="cat-icon" />
        </div>
      )
      }

      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div >
  )
}

export default App