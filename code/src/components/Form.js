import React, { useState } from 'react'

export const Form = (props) => {
  const [name, setName] = useState('') 
  const [genre, setGenre] = useState('')
  const [language, setLanguage] = useState()
  const [email, setEmail] = useState('')
  const languages = [' english', ' swedish', ' both'] // array for radio-buttons under language

  const isFormComplete = () => {
    if (name === '') {
      return false
    }

    if (genre === '') {
      return false
    }

    if (language === '') {
      return false
    }

    if (email === '') {
      return false
    }

    if (isFormComplete()) {
      console.log(`Survey complete!`)
    }
  }

  return (
    <div className="form-container">
      <form>
        <div className="form-container-sections">
          <label htmlFor="name">Your name:</label>
          <input
            id="name"
            type="text"
            value={props.name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-container-sections">
          <label htmlFor="genre">Pick your genre:</label>
          <select 
            id="genre"
            value={genre}
            onChange={event => setGenre(event.target.value)}
          >
            {/* <option value=""></option> */}
            <option disabled></option>
            <option value="biography">Biography</option>
            <option value="classics">Classics</option>
            <option value="fiction">Fiction</option>
            <option value="humorComedy">Humor and comedy</option>
            <option value="crimeThriller">Crime and thriller</option>
          </select>
        </div>

        <div className="form-container-sections">
          <label htmlFor="language">Select preferred language:</label>
          {languages.map(lang => (
            <label key={lang}>
              <input 
                id="language"
                type="radio"
                value={lang}
                onChange={event => setLanguage(event.target.value)}
                checked={language === lang}
              />
              {lang}
            </label>
          ))}
        </div>

        <div className="form-container-sections">
        <label htmlFor="email">Your e-mail address:</label>
          <input 
            id="email"
            type="email" 
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
        </div>

        <div className='submit-container'>
          <button className='submit-button' type='submit' form=''></button>
        </div>

      </form>
    </div>
  )
}