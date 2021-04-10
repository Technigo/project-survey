import React from 'react'

const languages = [' english', ' swedish', ' both'] // array for radio-buttons under language

export const Form = props => {
  const { genre, setGenre, favorite, setFavorite, language, setLanguage, name, setName, email, setEmail } = props

  return (
    <div className="form-container">
      <form>
        <div className="form-container-sections">
          <label htmlFor="genre">Pick your genre:</label>
          <select 
            id="genre"
            value={genre}
            onChange={(e) => {setGenre(e.target.value)}}
          >
            <option disabled></option>
            <option value="biography">Biography</option>
            <option value="classics">Classics</option>
            <option value="fiction">Fiction</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
          </select>
        </div>

        <div className="form-container-sections">
          <label htmlFor="favorite">The name of your favorite book:</label>
          <input
            id="favorite"
            type="text"
            placeholder="fav book"
            value={favorite}
            onChange={(e) => {setFavorite(e.target.value)}}
          />
        </div>

        <div className="form-container-sections">
          <label htmlFor={language}>Select preferred language:</label>
          {languages.map(lang => (
            <label className="label-radio" key={lang}>
              <input 
                id={lang}
                type="radio"
                value={lang}
                checked={language === lang}
                onChange={(e) => {setLanguage(e.target.value)}}
              />
              {lang}
            </label>
          ))}
        </div>

        <div className="form-container-sections">
          <label htmlFor="name">Your name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        
        <div className="form-container-sections">
        <label htmlFor="email">Your e-mail address:</label>
          <input 
            id="email"
            type="email" 
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
        </div>
      </form>
    </div>
  )
}