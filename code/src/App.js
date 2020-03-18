import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Summary } from './components/Summary'
import { GoodbyeMessage } from './components/GoodbyeMessage'
import { Header } from './components/Header'
import './app.css'

export const App = (props) => {
  const [name, setName] = useState("");
  const [userAttendance, setUserAttendance] = useState(false);
  const [dayPreference, setDayPreference] = useState("")
  const [foodPreference, setFoodPreference] = useState("");
  const [allergy, setAllergy] = useState("");
  const [feeling, setFeeling] = useState(false);
  const [question, setQuestion] = useState(1);
  const [showAnswer, setShowAnswer] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [goodbyeMessage, setGoodbyeMessage] = useState(false);

  // Function to go to next question
  const nextQuestion = () => {
    if (question === 1) {
      setQuestion(2);
    } else if (question === 2) {
      setQuestion(3);
    } else if (question === 3) {
      setQuestion(4);
    } else if (question === 4) {
      setQuestion(5);
    } else if (question === 5) {
      setQuestion(6);
    }
  }

  // Function to go back to previous question
  const previousQuestion = () => {
    if (question === 6) {
      setQuestion(5)
    } else if (question === 5) {
      setQuestion(4)
    } else if (question === 4) {
      setQuestion(3)
    } else if (question === 3) {
      setQuestion(2)
    } else if (question === 2) {
      setQuestion(1)
    }
  }

  // Function to handle submit event
  const handleSubmit = (event) => {
    setSubmitted(true)
    setShowAnswer(!showAnswer)
  }

  // Function to handle rsvp attendance
  const invitationSubmit = (event) => {
    if (userAttendance === "Yes!") {
      nextQuestion()
    } else {
      setGoodbyeMessage(true);
      setShowAnswer(!showAnswer)
    }
  }

  return (
    <div className="mainWrapper">

      {showAnswer && (
        <form className="formContainer" onSubmit={(event) => event.preventDefault()}>

          <Header />

          {question === 1 && (
            <div>
              <fieldset className="question">
                <legend>first things first, are you coming?</legend>
                <div className="container">
                  <label>
                    <input
                      required
                      type="radio"
                      value="yes"
                      onChange={() => setUserAttendance("Yes!")}
                      checked={userAttendance === "Yes!"} />
                  Yes!</label>
                  <label>
                    <input
                      required
                      type="radio"
                      value="no"
                      onChange={() => setUserAttendance("No...")}
                      checked={userAttendance === "No..."} />
                 No...</label>
                </div>
              </fieldset>
              <div>
                <button type="submit" onClick={() => invitationSubmit()}>
                  Continue</button>
              </div>
            </div>
          )}

          {question === 2 && (
            <fieldset className="question">
              <legend>Fantastic! Let us know more about you</legend>
              <label for="lastname" className="userName">Your full name:</label>
              <input
                type="text"
                id="name"
                placeholder="Type your name here..."
                required
                onKeyPress={(e) => {
                  if (e.key === 'Enter') { nextQuestion() }
                }}
                onChange={event => setName(event.target.value)}
                value={name}
              />
            </fieldset>
          )}

          {question === 3 && (
            <fieldset className="question">
              <legend> {name}, what day will you attend the event</legend>
              <div className="container">
                <label><input name="attendance" value="Friday" type="radio" onChange={event => setDayPreference(event.target.value)} required />Friday</label>
                <label><input name="attendance" value="Saturday" type="radio" onChange={event => setDayPreference(event.target.value)} required />Saturday</label>
                <label><input name="attendance" value="Sunday" type="radio" onChange={event => setDayPreference(event.target.value)} required />Sunday</label >
              </div >
            </fieldset >
          )}

          {question === 4 && (
            <fieldset className="question">
              <legend>We will provide food. You would rather go for:</legend>
              <label>
                <select className="dropdown"
                  onChange={event => setFoodPreference(event.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') { nextQuestion() }
                  }}
                  value={foodPreference}
                >
                  <option value="">Choose wisely:</option>
                  <option value="liquids">Only be allowed to drink beer or coffee</option>
                  <option value="cheese or chocolate">Never eat cheese or chocolate again</option>
                  <option value="sugar">Never eat any kind of cake or any kind of ice cream again</option>
                </select>
              </label>
            </fieldset >
          )}

          {question === 5 && (
            <fieldset className="question">
              <legend>We will provide food and drinks. Do you have any allergies that we should be aware of?</legend>
              <label for="allergies">Your allergies:</label>
              <input
                type="text"
                id="allergy"
                placeholder="Type your food allergies here..."
                required
                onKeyPress={(e) => {
                  if (e.key === 'Enter') { nextQuestion() }
                }}
                onChange={event => setAllergy(event.target.value)}
                value={allergy}
              />
            </fieldset >
          )}

          {question === 6 && (
            <div>
              <fieldset className="question">
                <legend>Are you ready for this?</legend>
                <div className="feelings">
                  <label>
                    <input
                      required
                      type="radio"
                      value="excited"
                      onChange={() => setFeeling("excited")}
                      checked={feeling === "excited"}
                    />
                    <span className="emoji" role="img" aria-label="Party face">
                      Excited 🥳
                </span>
                  </label>
                  <label>
                    <input
                      required
                      type="radio"
                      value="cool"
                      onChange={() => setFeeling("cool")}
                      checked={feeling === "cool"}
                    />
                    <span className="emoji" role="img" aria-label="cool face">
                      Cool 😎
                </span>
                  </label>
                </div>
              </fieldset >
              <div>
                <button className="submitButton" type="submit" onClick={() => handleSubmit()}>
                  Submit</button>
              </div>
            </div>
          )}

          {/* Next / Back buttons */}
          <div>
            {(question !== 1) && (
              <button type="button" onClick={previousQuestion}>
                Go back
              </button>
            )}
            {(question !== 6 && question !== 1) && (
              <button type="button" onClick={nextQuestion}>
                Continue
              </button>
            )}
          </div>
        </form >
      )
      }

      {
        submitted && (
          <Summary name={name}
            foodPreference={foodPreference}
            dayPreference={dayPreference}
            feeling={feeling}
            allergy={allergy}
          />
        )
      }

      {
        goodbyeMessage && (
          <GoodbyeMessage name={name}
          />
        )
      }
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);