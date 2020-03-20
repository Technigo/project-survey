import React, { useState } from 'react'
import { QuestionSection } from './QuestionSection'

export const App = () => {

  const groups = ['0-100', '100-200', '500+']
  const [grams, setGrams] = useState('')
  const [sugaraddict, setSugaraddict] = useState(false)
  const [favoriteCandy, setFavoriteCandy] = useState('')
  const [name, setName] = useState('')
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className="App">

      <header>
        <h2>
          WICH TYPE OF
        </h2>
        <h1>
          CANDY
        </h1>
        <h2>
          ARE YOU?
        </h2>
      </header>

      {!showSummary && (
        <form onSubmit={handleSubmit}>

          {/* HERE YOU CAN CHOOSE A GROUP WITH RADIOBUTTONS */}
          <QuestionSection>
            <h3>
              HOW MANY GRAMS OF LÖSGODIS DO YOU CONSUME PER WEEK?
            </h3>
            <div className="gramsWrapper">
              {groups.map(group => (
                <label key={group}>
                  <input
                    type="radio"
                    value={group}
                    onChange={event => setGrams(event.target.value)}
                    checked={grams === group}
                  />
                  {group} g.
                </label>
              ))}
            </div>
          </QuestionSection>

          {/* HERE YOU FILL IN IF YOURE A SUGARADDICT WITH A CHECKBOX */}
          <QuestionSection>
            <h3>
              ARE YOU ADDICTED TO SUGAR?
            </h3>
            <label className="inputWrapper">
              <div>
                YES
                <input
                  type="checkbox"
                  checked={sugaraddict}
                  onChange={event => setSugaraddict(event.target.checked)}
                />
              </div>
            </label>
          </QuestionSection>

          {/* SELECT YOUR FAVORITE CANDY IN A DROPDOWN MENU */}
          <QuestionSection>
            <label className="inputWrapper">
              <h3>
                WHAT DO YOU PREFER?
              </h3>
              <select
                onChange={event => setFavoriteCandy(event.target.value)}
                value={favoriteCandy}
              >
                <option value="">Select your favorite candy:</option>
                <option value="CHOCOLATE">CHOCOLATE</option>
                <option value="LICORICE">LICORICE</option>
                <option value="SOUR">SOUR</option>
                <option value="WINEGUMS">WINEGUMS</option>
                <option value="A MIX OF EVERYTHING">A MIX OF EVERYTHING</option>
              </select>
            </label>
          </QuestionSection>

          {/* FILL IN YOUR NAME */}
          <QuestionSection>
            <h3>
              WHATS YOUR NAME?
            </h3>
            <p>
              answer here ↓ (yes, it's important for this super scientific survey)
            </p>
            <label className="inputWrapper">
              <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
                required
              />
            </label>
          </QuestionSection>

          {/* SUBMIT-SECTION */}
          <QuestionSection>
            <button type="submit" disabled={name === '' || grams === '' || favoriteCandy === ''}>
              SUBMIT
            </button>
          </QuestionSection>
        </form>
      )}

      {/* SUMMARY-SECTION */}
      {showSummary && (
        <QuestionSection>
          <h2>
            Hi {name}!
          </h2>
          <h2>
            It seems like you're {sugaraddict === false ? "not addicted to sugar (wich I guess is good).." : "addicted to sugar, wich means you're a TRUE candy lover!"} Your favorite type of candy is
            {favoriteCandy === "CHOCOLATE" && ' chocolate! Yumm!'}
            {favoriteCandy === "LICORICE" && ' licorice! Interesting choice..'}
            {favoriteCandy === "SOUR" && " the sour stuff! That's my favorite aswell!"}
            {favoriteCandy === "WINEGUMS" && ' winegums! why?!'}
            {favoriteCandy === "A MIX OF EVERYTHING" && " all kinds of candy! Why choose when you don't have too?"}
          </h2>
        </QuestionSection>
      )}

      <footer>
        <p>
          🍭🍬🍪🍩🍿💕
        </p>
      </footer>

    </div>
  )
}
