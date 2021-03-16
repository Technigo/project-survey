import React, { useState } from 'react'

export const Form = () => {
  const [name, setName] = useState('') 
  const [genre, setGenre] = useState('')
  const [language, setLanguage] = useState()
  const languageRadioBtn = [' english', ' swedish', ' both'] // array for radio-buttons under language

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
          <p>Hello {name}</p>
        </div>

        <div className="form-container-sections">
          <label htmlFor="genre">Pick your genre:</label>
          <select 
            id="genre"
            value={genre}
            onChange={event => setGenre(event.target.value)}
          >
            <option value="">Select genre:</option>
            <option value="biography">Biography</option>
            <option value="classics">Classics</option>
            <option value="fiction">Fiction</option>
            <option value="humorComedy">Humor and comedy</option>
            <option value="crimeThriller">Crime and thriller</option>
          </select>
        </div>

        <div className="form-container-sections-radio">
          <label htmlFor="language">Select preferred language:</label>
          {languageRadioBtn.map(lang => (
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
          
          
          {/* <label htmlFor="english">English</label>
          <input 
              id="english"
              type="radio"
              value="english"
              onChange={event => setLanguage(event.target.value)}
              checked={language === "english"}
            /> */}
        </div>

      </form>
    </div>
  )
}