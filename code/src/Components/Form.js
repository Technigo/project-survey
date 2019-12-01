import React, { useState } from 'react'
import { Summary } from './Summary'
import './Form.css'



const married = ["Never", "Once", "Twice", "Three times", "Four times"]
const spots = ["Cafè Park", "Cafè Park House", "Central Perk Cafè", "Central Park"]
const places = ["During their trip to Vegas", "When they went for sking", "During Ross wedding in London", "At Central Perk Cafè"]
const pets = ["Dog", "Cat", "Monkey", "Duck"]
const favSongs = ["Holiday Song", "Smelly Cat", "Sticky Shoes", "Jingle Bitch"]
const reasons = ["Rachel fell in love with her boss", "They didn't love each other anymore ", "Rachel had to move to Paris ", "Rachel was too busy with work to pay attention to Ross"]
// Made an object for all the question, because I wanted to show them in Summary as well
const Questions = {
  q1: "How many times have Ross been married?",
  q2: "Where did friends hang out the most?",
  q3: "Where did Monika and Chandler start dating?",
  q4: "What kind of pet did Chandler and Joey have?",
  q5: "Pheobe's famous song?",
  q6: "Why did Ross and Rachel break up?",
}
// An object for the correct answers, which are imported to Summary, to compare the user-answer with the currect answer
const CorrectAnswers = {
  married: married[3],
  spots: spots[2],
  places: places[2],
  pets: pets[3],
  favSongs: favSongs[1],
  reasons: reasons[3]
}

// React Hooks
export const Form = () => {

  const [marriages, setMarriages] = useState();
  const [hangoutSpot, setHangoutSpot] = useState();
  const [datingPlace, setDatingplace] = useState();
  const [animal, setAnimals] = useState();
  const [song, setSongs] = useState();
  const [breakup, setBreakup] = useState();
  const [submitted, setSubmitted] = useState(false);

  // A function which sent an alert, if user don't answer all the question. 
  const handelSubmit = (event) => {
    event.preventDefault()

    if (marriages === undefined || hangoutSpot === undefined || datingPlace === undefined || animal === undefined || song === undefined || breakup === undefined) {
      alert("Answer all questions ... ")

    } else {

      setSubmitted(true)
      // If all questions are answered scroll to top
      window.scrollTo(0, 0)
    }
  }



  return (
    <div className="form-container">

      {/* Display none on the form - shows the summary and hides the form, when the submit btn trigged */}
      {!submitted && (
        <div>
          <h2>How well do you remember Friends?</h2>

          <form onSubmit={handelSubmit} className="form-style">

            <div className="question-card">
              <h3> {Questions.q1} </h3>

              {married.map(marriedItem => (

                <label htmlFor={marriedItem} key={marriedItem} className="radio-circle">

                  <input
                    type="radio"
                    value={marriedItem}
                    onChange={event => setMarriages(event.target.value)}
                    checked={marriages === marriedItem}
                    id={marriedItem}

                  />
                  <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                  {marriedItem}
                </label>
              ))}
            </div>


            <div className="question-card">
              <h3> {Questions.q2} </h3>

              {spots.map(spot => (

                <label key={spot} className="radio-circle">

                  <input
                    type="radio"
                    value={spot}
                    onChange={event => setHangoutSpot(event.target.value)}
                    checked={hangoutSpot === spot}
                  />
                  <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                  {spot}
                </label>
              ))}
            </div>

            <div className="question-card">

              <h3> {Questions.q3} </h3>

              <div className="drop-down">
                <select required
                  onChange={event => setDatingplace(event.target.value)}
                  checked={datingPlace === places}
                  tabIndex="0"
                  defaultValue="- Select Here -"
                >

                  <option disabled> - Select Here - </option>

                  {places.map(place => (
                    <option key={place} value={place}>{place}</option>
                  ))}

                </select>
              </div>

            </div>
            <div className="question-card">
              <h3> {Questions.q4} </h3>

              {pets.map(pet => (

                <label key={pet} className="radio-circle">

                  <input
                    type="radio"
                    value={pet}
                    onChange={event => setAnimals(event.target.value)}
                    checked={animal === pet}
                  />
                  <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                  {pet}
                </label>
              ))}
            </div>

            <div className="question-card">
              <h3> {Questions.q5}</h3>

              {favSongs.map(favSong => (

                <label key={favSong} className="radio-circle">

                  <input
                    type="radio"
                    value={favSong}
                    onChange={event => setSongs(event.target.value)}
                    checked={song === favSong}
                  />
                  <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                  {favSong}
                </label>
              ))}
            </div>

            <div className="question-card">
              <h3> {Questions.q6} </h3>

              <div className="drop-down">
                <select required
                  onChange={event => setBreakup(event.target.value)}
                  checked={breakup === reasons}
                  tabIndex="0"
                  defaultValue="- Select Here -"
                >

                  <option disabled> - Select Here - </option>

                  {reasons.map(reason => (

                    <option key={reason} value={reason}>{reason} </option>
                  ))}

                </select>
              </div>
            </div>


            <button className="submit-btn"> Finish </button>

          </form >
        </div>
      )}

      {submitted && <Summary marriages={marriages} hangoutSpot={hangoutSpot} datingPlace={datingPlace} animal={animal} song={song} breakup={breakup} answers={CorrectAnswers} questions={Questions} />}
    </div >
  )
}