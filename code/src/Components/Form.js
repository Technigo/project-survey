import React, { useState } from 'react'
import { FormHeader } from './FormHeader'
import { Summary } from './Summary'


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

    <div>
      <FormHeader />

      <div className="form-container">
        {/* display:none, on the form */}
        <h2>How well do you remember friends?</h2>

        {!submitted && (
          <form onSubmit={handelSubmit} className="form-style">

            <p>Please Write your name</p>
            <input
              type="text"
              required
              placeholder="Write your name here"
              onChange={event => setUserName(event.target.value)}
              value={userName}
            />

            <p>Your favorite character</p>
            <input
              type="text"
              placeholder="Rachel,Monica, Pheobe, Joey, Chandler, Ross"
              onChange={event => setName(event.target.value)}
              value={name}
            />

            <p>Where did friends hang out the most? </p>

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

            <p>Where did Monika and CHandler start dating?</p>

            <select className="drop-down" required onChange={event => setDatingplace(event.target.value)}
              checked={datingPlace === places}>

              <option value=""> - Select Here - </option>

              {places.map(place => (
                <option key={place} value={place}>{place}</option>
              )
              )
              }
            </select>

            <p>What kind of pet did Chandler and Joey have?</p>

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

            <p>Pheobe famus song?</p>

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
            <p>Ross and Rachel broke up because ... </p>

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

        {submitted && <Summary userName={userName} name={name} hangoutSpot={hangoutSpot} datingPlace={datingPlace} animal={animal} song={song} breakup={breakup} />}

      </div>
    </div >

  )
}

export default Form;