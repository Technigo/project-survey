import React, { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Summary } from './components/Summary'
import { Button } from './components/Button'

export const App = () => {
  
  const [genre, setGenre] = useState('')
  const [favorite, setFavorite] = useState('')
  const [language, setLanguage] = useState('')
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('')
  const [summary, setSummary] = useState(false)

  // when clicking button it checks if all form-questions have been answered, if so summary is set to true and summary-div is shown

    const changeState = () => {
      if (summary === false) {
         return true;
       } else {
         return false;
       }
     }

  //   const changeState = () => {
  //   if (genre === '') {
  //     alert(`You haven't answered all questions`)
  //     return false
  //   }

  //   if (favorite === '') {
  //     alert(`You haven't answered all questions`)
  //     return false
  //   }

  //   if (language === '') {
  //     alert(`You haven't answered all questions`)
  //     return false
  //   }

  //   if (name=== '') {
  //     alert(`You haven't answered all questions`)
  //     return false
  //   }

  //   if (email === '') {
  //     alert(`You haven't answered all questions`)
  //     return false
  //   }

  //   return true
  // }

  return (
    <>
      {!summary && (
       <> 
        <Header />
        <Form 
          genre={genre} setGenre={setGenre}
          favorite={favorite} setFavorite={setFavorite}
          language={language} setLanguage={setLanguage}
          name={name} setName={setName}
          email={email} setEmail={setEmail}
        />
        <Button onClick={() => setSummary(changeState())}
        /> 
       </> 
      )}

      {summary && (
        <Summary 
          genre={genre}
          favorite={favorite}
          language={language}
          name={name}
          email={email}
        />
      )}
    </>
  )
}