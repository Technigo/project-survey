import React, { useState } from 'react'

const ageGroups = ["<20", "21-40", "40+"]

export const App = () => {
  const [personName, setPersonName] = useState("");
  const [skiing, setSkiing] = useState(false);
  const [surfing, setSurfing] = useState(false);
  const [cycling, setCycling] = useState(false);
  const [otherSport, setOtherSport] = useState(false);
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");


  return (
    <div>
      <div id="survey">

      <form
        className="question-form"
        // onLoad={document.getElementById('review').style.visibility = 'hidden'}
        onSubmit={
          event => {event.preventDefault(); document.getElementById('survey').style.display = 'none'}
        }
      >
      <h1>Welcome to the questionnaire !</h1>
        <h2>Please answer these questions</h2>
        <div className="question">
          <label>
          Name:
            <input
              type="text"
              value={personName}
              onChange={event => setPersonName(event.target.value)}
            />
          </label>
        </div>
        <div className="question">
          What sports do you like ?
          <br />
          <label>
            <input
              type="checkbox"
              checked={skiing}
              onChange={(event) => setSkiing(event.target.checked)}
            />
            Skiing
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={surfing}
              onChange={(event) => setSurfing(event.target.checked)}
            />
            Surfing
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={cycling}
              onChange={(event) => setCycling(event.target.checked)}
            />
            Cycling
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={otherSport}
              onChange={(event) => setOtherSport(event.target.checked)}
            />
            Other
          </label>
          <br />
        </div>
        <div className="question">
        What is your age ?
        <br />
        {ageGroups.map(group => (
              <label>
                <input
                  type="radio"
                  value={group}
                  onChange={ event => setAgeGroup(event.target.value)}
                  checked={ageGroup === group}
                />
                {group}
                <br />
              </label>
            )
          )
        }
        </div>
        <div className="question">
          <label>I am</label>
            <select
              value={gender}
              onChange={event => setGender(event.target.value)}
            >
              <option value="">-- Please choose --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="noAnswer">Prefer not to say</option>
            </select>

        </div>
        <div className="button">
          <input type="submit"></input>
        </div>
        </form>
        </div>
      <div id="review">
      <h1>Thank you {personName}!</h1>
      <h2>You have just completed the survey</h2>
      <p>
        Your are {gender} and in the agegroup {ageGroup}.
        <br />
        You like
        {skiing && " skiing,"}
        {surfing && " surfing,"}
        {cycling && " cycling,"}
        {otherSport && " and some other sports"}
        <br />
        Have a nice day !
      </p>
      </div>

    </div>
  )
}
