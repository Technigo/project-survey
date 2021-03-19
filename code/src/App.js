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

  // checks if all form-questions have been answered, if so summary state is set to true and summary is shown
  const isSurveyComplete = () => {
    if (
      genre === '' ||
      favorite === '' ||
      language === '' ||
      name === '' ||
      email === ''
    ) {
      alert(`You haven't answered all questions`)
      return false
    } else {
      return true
    }
  }

  // refreshes page when button on summary-page is clicked
  const refreshPage = () => {
    window.location.reload()
  }

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
        <Button 
          onClick={() => setSummary(isSurveyComplete())}
          title={'Submit'}
        /> 
       </> 
      )}

      {summary && (
        <>
          <Summary 
            genre={genre}
            favorite={favorite}
            language={language}
            name={name}
            email={email}
          />
          <Button 
            onClick={refreshPage}
            title={'Redo form'}
          />
          <div className="summary-img-container">
            <img className="summary-img" src="/assets/books_twig.jpg" alt="Three books with a twig with green leaves on top"/>
          </div>
        </>
      )}
    </>
  )
}