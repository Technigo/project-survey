import React, { useState } from "react"
import "./index.css"

const characters = ["The Grinch", "Rudolph", "Frosty the Snowman"]

export const App = () => {
  const [name, setName] = useState()
  const [nickname, setNickname] = useState()
  const [character, setCharacter] = useState("")
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

      {showResult && <h1>EVERYONE LOVES CHRISTMAS!</h1>}

      {!showResult && (
        <form onSubmit={handleSubmit}>

      <div className='survey'>
        <form onSubmit={event => event.preventDefault()}>
          <h2>Fill in your full name, please</h2>
          <input
            type='text'
            onChange={event => setName(event.target.value)}
            value={name}
          />
        </form>
        <span>* * * * * * * * * * * * * * * * * * * * *</span>

        <form onSubmit={event => event.preventDefault()}>
          <h2>Fill in your Christmas nickname, please</h2>
          <input
            type='text'
            onChange={event => setNickname(event.target.value)}
            value={nickname}
          />
        </form>
        <span>* * * * * * * * * * * * * * * * * * * * *</span>

        <form>
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
        </form>
        <span>* * * * * * * * * * * * * * * * * * * * *</span>

        <form>
          <h2>Select your favourite Christmas Song</h2>
          <select onChange={event => setSong(event.target.value)} value={song}>
            <option value=''>Select</option>
            <option value='song1'>Song1</option>
            <option value='song2'>Song2</option>
            <option value='song3'>Song3</option>
            <option value='song4'>Song4</option>
            <option value='song5'>Song5</option>
          </select>
        </form>
        <span>* * * * * * * * * * * * * * * * * * * * *</span>
        <button type='submit'>Submit my answers</button>
      </div>
      <footer>
        <p>Happy Holidays™</p>
      </footer>
    </div>
  )
}
