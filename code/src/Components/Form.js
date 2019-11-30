import React, { useState } from 'react'
import { Summary } from './Summary'
import './Form.css'

const characters = ["Rachel", "Monica", "Pheobe", "Joey", "Chandler", "Ross"]
const spots = ["Cafè Park", "Cafè House", "Central Perk cafè", "Central Park"]
const places = ["On their trip in Vegas", "When they went for sking", "At Ross wedding in London", "At Cafè House"]
const pets = ["Dog", "Cat", "Monkey", "Duck"]
const favSongs = ["Happy Hanika", "Smelly Cat", "Christmas Song", "Smelly Dog"]
const reasons = ["Rachel fell in love with her boss", "They didn't love each other anymore ", "Rachel had to move to Paris ", "Ross cheated on Rachel, when he thought they were on a break"]

const CorrectAnswers = {
  spots: spots[2],
  places: places[2],
  pets: pets[3],
  favSongs: favSongs[1],
  reasons: reasons[3]
}

export const Form = () => {

  const [name, setName] = useState("");
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

        <h2>How well do you remember friends?</h2>

        {/* display:none, on the form */}

        {!submitted && (

          <form onSubmit={handelSubmit} className="form-style">

            <h3>1. Your favorite character</h3>

            {characters.map(character => (

              <label key={character} className="radio-circle">

                <input
                  type="radio"
                  value={character}
                  onChange={event => setName(event.target.value)}
                  checked={name === character}
                />
                <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                {character}
              </label>
            ))}

            <h3> 2. Where did friends hang out the most? </h3>

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
              <h3> 3. Where did Monika and Chandler start dating?</h3>

              <div className="drop-down">
                <select required onChange={event => setDatingplace(event.target.value)}
                  checked={datingPlace === places}>

                  <option value=""> - Select Here - </option>

                  {places.map(place => (
                    <option key={place} value={place}>{place}</option>
                  ))}

                </select>
              </div>
            </label>

            <h3> 4. What kind of pet did Chandler and Joey have?</h3>

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

            <h3> 5. Pheobe's famous song?</h3>

            {favSongs.map(favSong => (

              <label key={favSong} className="checkboxes">

                <input
                  type="checkbox"
                  value={favSong}
                  onChange={event => setSongs(event.target.value)}
                  checked={song === favSong}
                />
                <span className="checkmark" role="checkbox" aria-checked="false" tabIndex="0"></span>
                {favSong}
              </label>
            ))}

            <label>
              <h3> 6. Ross and Rachel broke up because? </h3>

              <div className="drop-down">
                <select required onChange={event => setBreakup(event.target.value)}
                  checked={breakup === reasons}>

                  <option value=""> - Select Here - </option>

                  {reasons.map(reason => (

                    <option key={reason} value={reason}>{reason} </option>
                  ))}

                </select>
              </div>
            </label>

            <div>
              <button className="submit-btn">Show me the result </button>
            </div>
          </form>
        )}

        {submitted && <Summary name={name} hangoutSpot={hangoutSpot} datingPlace={datingPlace} animal={animal} song={song} breakup={breakup} answers={CorrectAnswers}/>}
      </div>
  )
}