import React, { useState } from 'react'
import { FormHeader } from './FormHeader'
import { Summary } from './Summary'

const characters = ["Rachel", "Monica", "Pheobe", "Joey", "Chandler", "Ross"]
const spots = ["Cafè Park", "Cafè House", "Central Perk cafè", "Central Park"]
const places = ["On their trip in Vegas", "When they went for sking", "At Ross wedding in london", "At Cafè House"]
const pets = ["Dog", "Cat", "Monkey", "Dock"]
const favSongs = ["Happy Hanika", "Smelly Cat", "Christmas-song", "Smelly Dog"]
const reasons = ["Rachel fell in love with her boss", "they didn't love each other anymore ", "Rachel had to move to Paris ", "Ross cheated on Rachel, when he thought they were on a break"]

const Form = () => {

  const [userName, setUserName] = useState("");
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

    <div className="container">

      <FormHeader />

      <div className="form-container">

        <h2>How well do you remember friends?</h2>

        {/* display:none, on the form */}
        {!submitted && (
          <form onSubmit={handelSubmit} className="form-style">

            <h3>1. Your favorite character</h3>

            {characters.map(character => (

              <label key={character}>

                <input className="radio-circle"
                  type="radio"
                  value={character}
                  onChange={event => setName(event.target.value)}
                  checked={name === character}
                />
                {character}
              </label>
            )
            )
            }

            <h3> 2. Where did friends hang out the most? </h3>

            {spots.map(spot => (

              <label key={spot}>

                <input className="radio-circle"
                  type="radio"
                  value={spot}
                  onChange={event => setHangoutSpot(event.target.value)}
                  checked={hangoutSpot === spot}
                />
                {spot}
              </label>
            )
            )
            }

            <h3> 3. Where did Monika and CHandler start dating?</h3>

            <select className="drop-down" required onChange={event => setDatingplace(event.target.value)}
              checked={datingPlace === places}>

              <option value=""> - Select Here - </option>

              {places.map(place => (
                <option key={place} value={place}>{place}</option>
              )
              )
              }
            </select>

            <h3> 4. What kind of pet did Chandler and Joey have?</h3>

            {pets.map(pet => (

              <label key={pet}>

                <input className="radio-circle"
                  type="radio"
                  value={pet}
                  onChange={event => setAnimals(event.target.value)}
                  checked={animal === pet}
                />
                {pet}
              </label>
            )
            )
            }

            <h3> 5. Pheobe famus song?</h3>

            {favSongs.map(favSong => (

              <label key={favSong}>

                <input className="checkboxes"
                  type="checkbox"
                  value={favSong}
                  onChange={event => setSongs(event.target.value)}
                  checked={song === favSong}
                />
                {favSong}
              </label>
            )
            )
            }
            <h3> 6. Ross and Rachel broke up because ... </h3>

            <select className="drop-down" required onChange={event => setBreakup(event.target.value)}
              checked={breakup === reasons}>

              <option value=""> - Select Here - </option>

              {reasons.map(reason => (

                <option key={reason} value={reason}>{reason} </option>
              )
              )
              }

            </select>
            <div>
              <button className="submit-btn">Show me the result </button>
            </div>
          </form>
        )}

        {submitted && <Summary name={name} hangoutSpot={hangoutSpot} datingPlace={datingPlace} animal={animal} song={song} breakup={breakup} />}
      </div>

      <footer>
        <div>Nasim Mahzoun 2019</div>
      </footer>
    </div >

  )
}

export default Form;