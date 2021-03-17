import React from 'react'

const languages = [' english', ' swedish', ' both'] // array for radio-buttons under language

export const Form = (props) => {
  const { name, setName } = props
  const { genre, setGenre } = props
  const { language, setLanguage } = props
  const { email, setEmail } = props
  // const [name, setName] = [props.name, props.setName]
  // const [genre, setGenre] = [props.genre, props.setGenre]
  // const [language, setLanguage] = [props.language, props.setLanguage]
  // const [email, setEmail] = [props.email, props.setEmail]

  return (
    <div className="form-container">
      <form>
        <div className="form-container-sections">
          <label htmlFor="name">Your name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
        </div>

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
                onChange={(e) => {setLanguage(e.target.value)}}
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
            onChange={(e) => {setEmail(e.target.value)}}
            />
        </div>
      </form>
    </div>
  )
}