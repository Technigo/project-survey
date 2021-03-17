import React, { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Summary } from './components/Summary'

export const App = () => {
  const [name, setName] = useState('') 
  const [genre, setGenre] = useState('')
  const [language, setLanguage] = useState('')
  const [email, setEmail] = useState('')
  const [summary, setSummary] = useState(false)
  const [form, setForm] = useState(true)

  // const isFormComplete = () => {
  //   if (name === '') {
  //     return false
  //   }

  //   if (genre === '') {
  //     return false
  //   }

  //   if (language === '') {
  //     return false
  //   }

  //   if (email === '') {
  //     return false
  //   }

  //   return true
  // }

  // if (isFormComplete === true) {
  //   console.log(`Survey complete!`)
  // } else {
  //   console.log(`Survey not complete`)
  // }

  const changeState = () => {
    if (summary === false) {
      return true 
    } else {
      return false
    }
  }

  return (
    <>
      <Header />
      <Form 
        name={name} setName={setName}
        genre={genre} setGenre={setGenre}
        language={language} setLanguage={setLanguage}
        email={email} setEmail={setEmail}
      />

      <div className='submit-container'>
          <button onClick={() => setSummary(changeState())} className='submit-button' type='submit' form=''>Submit</button>
      </div>


      {summary && (
        <Summary 
          name={name}
          genre={genre} 
          language={language}
          email={email}
        />
      )}
    </>
  )
}