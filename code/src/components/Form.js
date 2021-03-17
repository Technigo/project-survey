import React, { useState } from 'react'

export const Form = (props) => {
  const [name, setName] = useState('') 
  const [genre, setGenre] = useState('')
  const [language, setLanguage] = useState()
  const [email, setEmail] = useState('')
  const languages = [' english', ' swedish', ' both'] // array for radio-buttons under language

  return (
    <div className="form-container">
      <form>
        <div className="form-container-sections">
          <label htmlFor="name">Your name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          
          {/* if  
          <p>Hello {name}!</p> */}
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

        

        {/* <div className="summary">
          <p>Name: {name}</p>
          <p>Genre: {genre}</p>
          <p>Language: {language}</p>
          <p>E-mail: {email}</p>
        </div> */}

      </form>
    </div>
  )
}