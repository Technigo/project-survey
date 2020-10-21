import React, { useState } from 'react'
import { Footer } from './Footer.js'
import { Summary } from './Summary.js'
import { Name } from './Name.js'
import { Zodiac } from './Zodiac.js'
import { FinalQuestion } from './FinalQuestion.js'

export const App = () => {

  const [name, setName] = useState("")
  const [zodiac, setZodiac] = useState("")
  const [question, setQuestion] = useState("")
  const [summary, setSummary] = useState(false)

  const zodiacArray = ['Aries', 'Taurus', 'Gemeni', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scoripio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pieces']

  const handleSubmit = event => {
    event.preventDefault()
    setSummary(true)
  }

  return (
    <>
      {!summary && <form onSubmit={handleSubmit}>
        <Name 
          name={name}
          setName={setName}
        />
        <Zodiac
          name={name}
          zodiac={zodiac}
          setZodiac={setZodiac}
          zodiacArray={zodiacArray}
        />
        <FinalQuestion 
          zodiac={zodiac}
          question={question}
          setQuestion={setQuestion}
        />

        <button type="submit">
          Reveal love match
        </button>
      </form>}

      {summary && 
      <Summary 
        name={name} 
        zodiac={zodiac} 
        question={question}
      /> }
      <Footer />
    </>
  )
}
