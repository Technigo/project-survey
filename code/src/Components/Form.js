import React, { useState } from 'react'
import { Summary } from './Summary'
import './Form.css'



const married = ["Never", "Once", "Twice", "Three times", "Four times"]
const spots = ["Cafè Park", "Cafè House", "Central Perk Cafè", "Central Park"]
const places = ["During their trip to Vegas", "When they went for sking", "At Ross wedding in London", "At Cafè House"]
const pets = ["Dog", "Cat", "Monkey", "Duck"]
const favSongs = ["Happy Hanukkah", "Smelly Cat", "Christmas Song", "Smelly Dog"]
const reasons = ["Rachel fell in love with her boss", "They didn't love each other anymore ", "Rachel had to move to Paris ", "Ross cheated on Rachel, when he thought they were on a break"]

const Questions = {
  q1: "How many times have Ross been married?",
  q2: "Where did friends hang out the most?",
  q3: "Where did Monika and Chandler start dating?",
  q4: "What kind of pet did Chandler and Joey have?",
  q5: "Pheobe's famous song?",
  q6: "Why did Ross and Rachel break up?",
}

const CorrectAnswers = {
  married: married[3],
  spots: spots[2],
  places: places[2],
  pets: pets[3],
  favSongs: favSongs[1],
  reasons: reasons[3]
}

export const Form = () => {

  const [marriages, setMarriages] = useState();
  const [hangoutSpot, setHangoutSpot] = useState();
  const [datingPlace, setDatingplace] = useState();
  const [animal, setAnimals] = useState();
  const [song, setSongs] = useState();
  const [breakup, setBreakup] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

  }

  return (
      <div className="form-container">

        

        {/* display:none, on the form */}

        {!submitted && (
          
          <form onSubmit={handelSubmit} className="form-style">
            <h2>How well do you remember friends?</h2>
            <h3> {Questions.q1} </h3>

            {married.map(marriedItem => (

              <label key={marriedItem} className="radio-circle">

                <input
                  type="radio"
                  value={marriedItem}
                  onChange={event => setMarriages(event.target.value)}
                  checked={marriages === marriedItem}
                />
                <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                {marriedItem}
              </label>
            ))}

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

            <label>
              <h3> {Questions.q3} </h3>

              <div className="drop-down">
                <select required onChange={event => setDatingplace(event.target.value)}
                  checked={datingPlace === places}>

                  <option disabled selected value> - Select Here - </option>

                  {places.map(place => (
                    <option key={place} value={place}>{place}</option>
                  ))}

                </select>
              </div>
            </label>

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

            <label>
              <h3> {Questions.q6} </h3>

              <div className="drop-down">
                <select required onChange={event => setBreakup(event.target.value)}
                  checked={breakup === reasons}>

                  <option disabled selected value> - Select Here - </option>

                  {reasons.map(reason => (

                    <option key={reason} value={reason}>{reason} </option>
                  ))}

                </select>
              </div>
            </label>

            <div>
              <button className="submit-btn"> Finish </button>
            </div>
          </form>
        )}

        {submitted && <Summary marriages={marriages} hangoutSpot={hangoutSpot} datingPlace={datingPlace} animal={animal} song={song} breakup={breakup} answers={CorrectAnswers} questions={Questions}/>}
      </div>
  )
}