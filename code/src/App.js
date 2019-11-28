import React, { useState } from "react"
import "./index.css"

const characters = ["The Grinch", "Rudolph", "Frosty the Snowman"]
const foods = [
  "Candy canes",
  "Gingerbread cookies",
  "Anything as long I can have glögg to it"
]

export const App = () => {
  const [name, setName] = useState()
  const [nickname, setNickname] = useState()
  const [character, setCharacter] = useState("")
  const [food, setFood] = useState("")
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
            <h2>Fill in your first name, please</h2>
            <input
              type='text'
              onChange={event => setName(event.target.value)}
              value={name}
            />

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <h2>Fill in your Christmas nickname, please</h2>
            <input
              type='text'
              onChange={event => setNickname(event.target.value)}
              value={nickname}
            />

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <h2>Which Christmas Character would you be in another life?</h2>
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

            <h2>Select your favourite Christmas Song</h2>
            <select
              onChange={event => setSong(event.target.value)}
              value={song}
            >
              <option value=''>Select</option>
              <option value='song1'>Song1</option>
              <option value='song2'>Song2</option>
              <option value='song3'>Song3</option>
              <option value='song4'>Song4</option>
              <option value='song5'>Song5</option>
            </select>

            <div className='divider'>
              * * * * * * * * * * * * * * * * * * * * *
            </div>

            <button type='submit'>Submit my answers</button>
          </div>
        </form>
      )}

      {showResult && (
        <p className='result'>
          Thank you {nickname}, formerly known as {name}. Looking forward to
          spend some time with you in December, eating {food} and listen to
          {song} day in and day out...
        </p>
      )}

      <footer>
        <p>Happy Holidays™</p>
      </footer>
    </div>
  )
}
