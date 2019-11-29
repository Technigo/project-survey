import React, { useState } from "react"
import "./index.css"

const characters = ["Rudolph", "The Grinch", "Frosty the Snowman"]
const foods = [
  "gingerbread cookies",
  "anything as long you can have glögg to it",
  "just coffee"
]

export const App = () => {
  const [name, setName] = useState()
  const [nickname, setNickname] = useState()
  const [character, setCharacter] = useState("Rudolph")
  const [food, setFood] = useState("gingerbread cookies")
  const [song, setSong] = useState("")
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowResult(true)
  }

  return (
    <div>
      <header>
        <h1>How much do you love Christmas?</h1>
      </header>

      {!showResult && (
        <form onSubmit={handleSubmit}>
          <div className='survey'>
            <label for='name'>Fill in your first name, please</label>
            <input
              id='name'
              type='text'
              onChange={event => setName(event.target.value)}
              required
              value={name}
            />

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <label for='nickname'>
              Fill in your Christmas nickname, please
            </label>
            <input
              id='nickname'
              type='text'
              onChange={event => setNickname(event.target.value)}
              required
              value={nickname}
            />

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <h2>Which Christmas Character is your spirit animal?</h2>
            {characters.map(group => (
              <label className='radioButtons' key={group}>
                <input
                  type='radio'
                  value={group}
                  onChange={event => setCharacter(event.target.value)}
                  checked={character === group}
                />
                {group}
              </label>
            ))}

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <h2>What do you prefer to eat?</h2>
            {foods.map(group => (
              <label className='radioButtons' key={group}>
                <input
                  type='radio'
                  value={group}
                  onChange={event => setFood(event.target.value)}
                  checked={food === group}
                />
                {group}
              </label>
            ))}

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <label for='song'>Select your favourite Christmas Song</label>
            <select
              id='song'
              onChange={event => setSong(event.target.value)}
              required
              value={song}
            >
              <option value=''>Select</option>
              <option value='Jingle Bells'>Jingle Bells - Frank Sinatra</option>
              <option value='Driving Home For Christmas'>
                Driving Home For Christmas - Chris Rea
              </option>
              <option value='I Don´t Believe in Santa Claus'>
                I Don´t Believe in Santa Claus - the Vandals
              </option>
              <option value='Last Christmas'>Last Christmas - Wham</option>
              <option value='All I Want For Christmas Is You'>
                All I Want For Christmas Is You - Mariah Carey
              </option>
            </select>

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <button type='submit'>Submit my answers</button>
          </div>
        </form>
      )}

      {showResult && (
        <div className='result'>
          <p>
            Thank you {nickname}, formerly known as {name}!
          </p>
          <p>
            I wish you a happy December, hanging out with your best friend{" "}
            {character}, having {food} and listen to "{song}" day in and day
            out!
          </p>
          <p className='verdict'>
            So do you love Christmas? <br />
            Of course you do, everyone does! If you think you're not, it's all
            about denial.
          </p>
        </div>
      )}

      <footer>
        <p>Happy Holidays™</p>
      </footer>
    </div>
  )
}
