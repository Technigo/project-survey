import React, { useState } from 'react'
import data from './data.json'
import { Summary } from './components/Summary.js'
import { Name } from './components/Name.js'
import { Zodiac } from './components/Zodiac.js'
import { Match } from './components/Match.js'
import { Reveal } from './components/Reveal.js'

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
          question="Welcome! What's your name?"
        />
        <Zodiac
          name={name}
          zodiac={zodiac}
          setZodiac={setZodiac}
          zodiacArray={data.signs}
        />
        <Match 
          zodiac={zodiac}
          question={question}
          setQuestion={setQuestion}
        />
        <Reveal 
          name={name}
          zodiac={zodiac}
          question={question}
          title="Reveal results"
        />
      </form>}
      {summary && 
      <Summary 
        name={name} 
        zodiac={zodiac} 
        question={question}
        zodiacArray={data.signs}
      /> }
    </>
  )
}
