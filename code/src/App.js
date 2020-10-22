import React, { useState } from 'react'
import data from './data.json'
import { Footer } from './Footer.js'
import { Summary } from './Summary.js'
import { Name } from './Name.js'
import { Zodiac } from './Zodiac.js'
import { FinalQuestion } from './FinalQuestion.js'

console.log(data.signs)

export const App = () => {

  const [name, setName] = useState("")
  const [zodiac, setZodiac] = useState("")
  const [question, setQuestion] = useState("")
  const [summary, setSummary] = useState(false)

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
          zodiacArray={data.signs}
        />
        <FinalQuestion 
          zodiac={zodiac}
          question={question}
          setQuestion={setQuestion}
        />
        <button 
          type="submit"
          disabled={name === '' || zodiac === '' || question === ''}>
          Reveal love match
        </button>
      </form>}
      {summary && 
      <Summary 
        name={name} 
        zodiac={zodiac} 
        question={question}
        zodiacArray={data.signs}
      /> }
      <Footer />
    </>
  )
}
