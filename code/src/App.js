import React, { useState } from 'react'
import { AwFrequency } from './AwFrequency'
import { WantThemes } from './WantThemes'
import { ThemeFrequency } from './ThemeFrequency'
import { ThemeSuggestion } from './ThemeSuggestion'

// Set of arrays
const awFrequencies = ['Every week', 'Every two weeks', 'Every month']
const themeFrequencies = ['Every afterwork', 'Every second afterwoks', 'once a year']
const themeAwChoices = ['YES', 'NO']

// Hooks that I am using in the App
export const App = () => {
  const [awFrequency, setAwFrequency] = useState(awFrequencies[0])
  const [themeAw, setThemeAw] = useState('')
  const [oftenTheme, setOftenTheme] = useState(themeFrequencies[0])
  const [themeSuggestion, setThemeSuggestion] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [question, setQuestion] = useState('awFrequency')

  // it prevents to change to the next page
  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  // With every click it changes to the next question 
  const handleContinueClick = () => {
    if (question === 'awFrequency') {
      setQuestion('themeAw')
    } else if (question === 'themeAw' && themeAw === 'YES') {
      setQuestion('oftenTheme')
    } else if (question === 'themeAw' && themeAw === 'NO') {
      setShowResult(true)
    } else if (question === 'oftenTheme') {
      setQuestion('themeSuggestion')
    } else if (question === 'themeSuggestion') {
      setQuestion(showResult)
    }
  }
  return (
    <div>
      {showResult && (
        <div>
          <h1>Thank you for participating in this survey! We capture your suggestions:</h1>
          <p>You would like to have the AW {awFrequency}.</p>
          {themeAw === 'YES' && (
            <p>You would like to have a theme AW {oftenTheme} and your suggestion for a theme is: {themeSuggestion}.</p>
          )}
          {themeAw === 'NO' && (
            <p>You would not like to have theme AW.</p>
          )}
        </div>
      )}
      {!showResult && (
        <form onSubmit={handleSubmit}>
          {question === 'awFrequency' && (
            <AwFrequency
              awFrequency={awFrequency}
              setAwFrequency={setAwFrequency}
              awFrequencies={awFrequencies} />)}
          {question === 'themeAw' && (
            <WantThemes
              themeAwChoices={themeAwChoices}
              themeAw={themeAw}
              setThemeAw={setThemeAw} />)}
          {question === 'oftenTheme' && (
            <ThemeFrequency
              oftenTheme={oftenTheme}
              themeFrequencies={themeFrequencies}
              setOftenTheme={setOftenTheme} />
          )}
          {question === 'themeSuggestion' && (
            <ThemeSuggestion
              label="What kind of theme AW do you suggest?"
              value={themeSuggestion}
              setValue={setThemeSuggestion}
            />
          )}

          {question !== 'themeSuggestion' && (
            <button type="button" onClick={handleContinueClick}>
              Continue
            </button>
          )}
        </form>
      )}
    </div>
  )
}
