import React from 'react'

export const AgeQuestion = ({ legal, onLegalChange }) => {

  return (
    <div className="question">
      <input type="checkbox" id="legal"
        onChange={event => onLegalChange(event.target.checked)}
        checked={legal === true}>
      </input>
      <label htmlFor="legal">I am 18 years or older, I promise!</label>
    </div >
  )
}

export const DrinkQuestion = ({ drink, onDrinkChange }) => {

  return (
    <div className="question" >
      <label htmlFor="drink">Which drink would you like?</label>
      <select id="drink"
        onChange={event => onDrinkChange(event.target.value)}
        value={drink}>
        <option value="Aperol Spritz">Aperol Spritz</option>
        <option value="Bloody Mary">Bloody Mary</option>
        <option value="Irish Coffee">Irish Coffee</option>
        <option value="Surprise">Surprise</option>
      </select>
    </div >
  )
}

export const AlcoholQuestion = ({ alcohol, onAlcoholChange }) => {

  return (
    <div className="question">
      <p>How much alcohol would you like in your drink?</p>

      <input type="radio" id="virgin" value="Virgin"
        onChange={event => onAlcoholChange(event.target.value)}
        checked={alcohol === "Virgin"}>
      </input>
      <label htmlFor="virgin">Virgin</label>

      <input type="radio" id="four" value="Conventional"
        onChange={event => onAlcoholChange(event.target.value)}
        checked={alcohol === "Conventional"}>
      </input>
      <label htmlFor="four">4 cl</label>

      <input type="radio" id="twelve" value="Strong"
        onChange={event => onAlcoholChange(event.target.value)}
        checked={alcohol === "Strong"}>
      </input>
      <label htmlFor="twelve">12 cl</label>

    </div>
  )
}