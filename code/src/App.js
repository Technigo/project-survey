import React, { useState } from 'react'
import './App.css'



const ageGroups = ["young", "old", "perfect"]

export const App = () => {
  const [ageGroup, setAgeGroup] = useState("perfect")
  const [animal, setAnimal] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [bestFriend, setBestFriend] = useState("")
  const [fun, setFun] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  return (
    <div className="result">
      {showResult && (
        <div>
          <h2>So, now I think I know you:</h2>
          <p> You are a {fun === "fun" ? "fun" : "no fun"} {ageGroup} {animal} and your best friend is {bestFriend}.</p>
        </div>

      )}



      {!showResult && (
        <form onSubmit={handleSubmit}>

          <section className="questions">
            <h1>Can I ask you a few questions?</h1>
            <div className="ages">
              <h3>How old are you?</h3>
            </div>
            <div>
              {ageGroups.map(group => (
                <label key={group}>
                  <input
                    type="radio"
                    value={group}
                    onChange={event => setAgeGroup(event.target.value)}
                    checked={ageGroup === group}
                  />
                  {group}
                </label>
              ))}

            </div>

            <div className="spiritAnimal">

              <h3>What is your spirit animal?</h3>
            </div>
            <label>
              <div>
                <input type="text"
                  value={animal}
                  onChange={(event) => setAnimal(event.target.value)} />
              </div>
            </label>


            <div className="friend">
              <h3>Who is your best friend?</h3>
            </div>
            <div>
              <select
                onChange={event => setBestFriend(event.target.value)}
                value={bestFriend}>
                <option value="">Please select</option>
                <option value="your partner">My partner</option>
                <option value="your mother">My mother</option>
                <option value="your pet">My pet</option>
              </select>
            </div>


            <div className="fun">

              <h3>Did you enjoy this survey?</h3>
            </div>
            <div>
              <label>

                <input
                  type="radio"
                  value="fun"
                  onChange={event => setFun(event.target.value)}
                  checked={fun === "fun"}
                />

                Yes
              </label>

              <label>
                <input
                  type="radio"
                  value="no fun"
                  onChange={event => setFun(event.target.value)}
                  checked={fun === "no fun"}
                />
                No
              </label>
            </div>


            <div className="submitButton">
              <button type="submit">
                What does this say about me?
              </button>
            </div>
          </section>
        </form>

      )
      }

    </div >

  )
}

